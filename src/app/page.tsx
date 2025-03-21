import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="transform-gpu">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
        <div className="flex-1 space-y-6 sm:space-y-8">
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
              <Image
                src="/images/profile/hero-main.png"
                alt="Samir's profile"
                fill
                className="object-cover rounded-lg"
                priority
                sizes="(max-width: 768px) 96px, 128px"
              />
            </div>
            <div className="space-y-2 sm:space-y-4">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
              >
                Hey - I'm Samir.
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
                I drive business impact at fintechs.
              </h2>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 text-gray-700 dark:text-gray-200">
            <p className="text-sm sm:text-base md:text-lg">
              Today, I am leading Strategic Finance for the Financial Partnerships team at{" "}
              <Link href="https://cash.app" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                Cash App
              </Link>{" "}
              where we're expanding financial access to help users do more with their money.
            </p>

            <p className="text-sm sm:text-base md:text-lg">
              Prior to that, I drove financial partnerships at{" "}
              <Link href="https://unit.co" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                Unit
              </Link>
              , which embeds financial features into products. Before that, I built and led the Strategic Finance function at{" "}
              <Link href="https://chime.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                Chime
              </Link>
              . Earlier, I was the first finance hire at{" "}
              <Link href="https://sift.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                Sift
              </Link>
              . I got my start in investment banking in the Financial Institutions Group at{" "}
              <Link href="https://jpmorgan.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                JP Morgan
              </Link>
              {" "}covering market structure and asset management.
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Outside of work, I write over-engineered fintech threads on{" "}
              <Link href="https://x.com/heyinterspace" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                Twitter
              </Link>
              , share perspectives on{" "}
              <Link href="https://perspectives.samir.xyz" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                Substack
              </Link>{" "}
              and write fintech & stratfin posts at{" "}
              <Link href="https://posts.interspace.ventures" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                Interspace
              </Link>
              . I also create over-engineered apps and ideas at{" "}
              <Link href="/ventures" className="text-purple-600 dark:text-purple-400 hover:underline">
                Interspace Ventures
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}