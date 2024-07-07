interface Service {
    time: string;
    detail: string;
    title?: string;
    header?: string;
}
  
export default function CardService({ service }: { service: Service }) {
    return (
      <div className="card-service">
        {/* <h2>{service.header}</h2> */}
        <p>
          <strong>Hora:</strong> {service.time} - 
          <strong>Detalle:</strong> {service.detail} 
          {service.title && ` - <strong>Título:</strong> ${service.title}`}
        </p>
      </div>
    );
}