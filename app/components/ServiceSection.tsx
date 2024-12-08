interface ServiceProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  dark?: boolean;
}

const ServiceSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
  dark = false,
}: ServiceProps) => {
  return (
    <div
      className={`${
        dark ? "bg-gray-100" : "bg-white"
      } py-24 flex flex-col items-center justify-center gap-4  px-4 text-center`}
    >
      <div
        className={`flex flex-col-reverse ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        } container mx-auto max-w-4xl gap-8 md:gap-24`}
      >
        <div className="flex flex-col gap-4 text-left">
          <div className="h-1 w-32 bg-red-600"></div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
        <div>
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
