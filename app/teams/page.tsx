import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

import teamsData from "@/public/data/teams.json";

function getTeams() {
  return teamsData;
}

export default async function TeamsPage() {
  const data = await getTeams();
  const teams = data.teams;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow mx-auto max-w-[1220px] px-4 py-12 sm:px-6 lg:px-8">
        <section className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-black text-slate-900">
            Di Balik <span className="text-blue-600">OpenUMKM</span>
          </h1>
        </section>

        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((member: any, idx: number) => (
            <article
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="relative mb-6 aspect-square overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h2>
                <p className="text-sm font-semibold text-blue-600 uppercase">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href={member.github || "https://github.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </div>
                <Link
                  href={`/teams/${member.slug}`}
                  className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 transition"
                >
                  Detail Profil
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
