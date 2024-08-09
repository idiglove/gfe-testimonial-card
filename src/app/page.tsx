import Image from "next/image";

export default function Home() {
  const name = "Sarah Dole";
  const handle = "@sarahdole";

  const testimonial = `I've been searching for high-quality abstract images for my design projects, 
  and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`;
  return (
    <main
      className={`w-full h-full flex flex-col 
      items-center bg-gradient-to-b from-gray-50 to-gfeGray py-[200px]`}
    >
      <div className="w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg">
        <div className="flex items-center gap-4 self-stretch">
          <Image
            src="/profile-thumbnail.jpg"
            alt="profile pic"
            width={48}
            height={48}
          />
          <div>
            <h3 className="font-semibold text-lg text-justify text-neutral-900">
              {name}
            </h3>
            <h4 className="font-normal text-sm text-neutral-600">{handle}</h4>
          </div>
        </div>

        <p className="font-normal text-base text-neutral-600">{testimonial}</p>
      </div>
    </main>
  );
}
