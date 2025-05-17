import Image from "next/image";

interface JobCardProps {
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  jobDescription: string[];
}

export default function JobCard({
  companyName,
  companyLogo,
  jobTitle,
  jobDescription,
}: JobCardProps) {
  return (
    <div className="flex flex-row gap-20 w-full">
      <div className="flex flex-col gap-2 w-1/2">
        <div className="flex flex-row gap-2">
          <Image src={companyLogo} alt={companyName} width={24} height={24} />
          <p className="text-xl font-bold text-blue-500">{companyName}</p>
        </div>
        <p className="mt-4 text-4xl font-bold text-blue-600">{jobTitle}</p>
        <ul className="mt-4 text-blue-600">
          {jobDescription.map((item, index) => (
            <li key={index} className="mb-2">
              • {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center bg-blue-600 w-100 h-100">
        <p className="text-white"> should be a image here</p>
      </div>
    </div>
  );
}
