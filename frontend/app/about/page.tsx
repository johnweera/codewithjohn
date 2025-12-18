import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center">About Me</h1>
        <p className="mt-3 text-center text-gray-600">
          Who is behind codewithjohn.dev?
        </p>

        {/* CONTENT */}
        <div className="mt-12 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Hi, I’m <strong>John</strong> 👋  
            I’m a self-taught developer and teacher who loves explaining
            complex things in a simple way.
          </p>

          <p>
            I created <strong>codewithjohn.dev</strong> to help beginners
            learn programming without stress. I focus on real skills like
            Python, Django, and Next.js — not just theory.
          </p>

          <p>
            One important thing about my teaching style is language.
            I explain everything in <strong>English and Thai</strong>,
            so Thai learners can truly understand and feel confident.
          </p>

          <p>
            My goal is simple:  
            <strong>Learn → Build → Explain → Share</strong>
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            ← Back Home
          </Link>

          <a
            href="https://youtube.com"
            target="_blank"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            YouTube Channel
          </a>
        </div>
      </div>
    </main>
  );
}
