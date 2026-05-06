import { notFound } from "next/navigation";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

import teamsData from "@/public/data/teams.json";

function getMember(slug: string) {
  return teamsData.teams.find((m: any) => m.slug === slug);
}

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await getMember(slug);

  if (!member) notFound();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow mx-auto max-w-[1000px] w-full px-4 py-12 sm:px-6">
        <Link
          href="/teams"
          className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 mb-8"
        >
          <i className="ri-arrow-left-line mr-2"></i> Kembali ke Semua Tim
        </Link>

        <div className="grid gap-12 md:grid-cols-[300px_1fr] items-start">
          <div
            className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl"
            data-aos="fade-right"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full object-cover aspect-[4/5]"
            />
          </div>

          <div className="space-y-6" data-aos="fade-up">
            <div>
              <h1 className="text-4xl font-black text-slate-900">
                {member.name}
              </h1>
              <p className="text-blue-600 font-bold text-lg">{member.role}</p>
            </div>
            <div className="prose prose-slate">
              <h3 className="text-xl font-bold text-slate-900">Tentang Saya</h3>
              <p className="text-slate-600 leading-relaxed border-l-4 border-slate-100 pl-4">
                "{member.bio}"
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900">
                Keahlian Utama
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button className="flex-1 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white hover:bg-blue-700 transition shadow-md">
                Hubungi {member.name.split(" ")[0]}
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition">
                <i className="ri-share-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
