// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import { useParams } from 'next/navigation';
export function middleware(request: NextRequest) {
  const authenticated = request.cookies.get('sessionMH');
  const currentURL = request.nextUrl.pathname;
//   const { id }: any = useParams();
  
  const allowedModules: any = [
    {
      module: "servicios",
      routes: [
        { path: "/servicios", requiredRoles: [9999], title: "servicios" },
        { path: "/servicios/hola", requiredRoles: [2], title: "servicios" },
      ],
    },
  ];

  const currentRoute = allowedModules
    .flatMap((module: any) => module.routes)
    .find((route: any) => route.path === currentURL && route.requiredRoles.includes(getidrol() | 9999));

  // if (!authenticated) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  console.log(currentRoute);

  if (!currentRoute) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

function getidrol() {
  // Implementa la lógica para obtener el idrol del usuario autenticado
  return 1; // Ejemplo de idrol
}

export const config = {
  matcher: ['/servicios/:path*'],
};
