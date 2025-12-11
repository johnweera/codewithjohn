export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-20">
        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center">codewithjohn.dev</h1>
        <p className="mt-3 text-center text-gray-600">
          Learn coding the simple way — Python, Django, and Next.js.
        </p>

        {/* SUBTEXT */}
        <p className="mt-10 text-center text-gray-700 leading-relaxed">
          Hi, I’m John. I teach beginners how to build real projects using
          clear, simple steps. Everything I learn, I explain — in both English
          and Thai.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#start"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Start Learning
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            YouTube
          </a>
        </div>

        {/* SIMPLE FEATURE LIST */}
        <div id="start" className="mt-16 space-y-6">
          <div className="rounded-xl border border-gray-200 p-5">
            <h2 className="text-lg font-semibold">Beginner Friendly</h2>
            <p className="mt-2 text-gray-600">
              Step-by-step coding lessons with easy explanations.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h2 className="text-lg font-semibold">Real Projects</h2>
            <p className="mt-2 text-gray-600">
              Build full-stack apps using Python, Django, and Next.js.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
          
            <h2 className="text-lg font-semibold">Thai + English</h2>
            <p className="mt-2 text-gray-600">
              Lessons explained in both languages for Thai learners.
              I love it very much
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
