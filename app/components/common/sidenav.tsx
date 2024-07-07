import Link from 'next/link';
import Section_Perfil from '../sectionPerfil';
import Technologies from '../tecnologyes';
import { FaWhatsapp} from 'react-icons/fa';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col">
      <div className='flex flex-col'> {/*bg-gray-600*/ }
        <div className="mb-2 flex items-end justify-center rounded-md bg-blue-600 md:h-100">
          <div className="profile w-100 text-white md:w-100">
            <Section_Perfil />
          </div>
        </div>
        <section className={'lenguaje'}>
          {/* <h2 className={'tecnologyes__title text-white'}>Skills</h2> */}
    
          {/* <ul className="text-white">
            <li className="flex items-center">
              <span className="icon mr-2">
                <FaWhatsapp className="icon text-white" />
              </span>
              <div>
                <span className="block font-bold">Phone</span>
                <span className="block">829896899</span>
              </div>
            </li>
            <li className="flex items-center mt-4">
              <span className="icon mr-2">
                <FaWhatsapp className="icon text-white" />
              </span>
              <div>
                <span className="block font-bold">Email</span>
                <span className="block">82@gmail.com</span>
              </div>
            </li>
          </ul> */}
        </section>
        <section className={'tecnologyes'}>
          <Technologies />
        </section>

        
        
        {/* <div className='flex flex-col px-3 py-4 md:px-2 h-100'>
          <span className='px-3 py-4 md:px-2 text-white'>ad</span>
        </div> */}
        
        {/* <div className="flex items-end justify-center px-3 py-2">
          <Link href="/servicios" className='btn btn-primary w-100' aria-label='Hacer una Reserva'>
            <span>Continuar</span>
          </Link>
        </div> */}
      </div>
    </div>
  );
}