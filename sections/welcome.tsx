import { SECTION_IDS } from '@/const/sections';

export function Welcome() {
  return (
    <section id={SECTION_IDS.welcome} className="min-h-screen px-12 pt-40 pb-12">
      <div className="max-w-[50vw]">
        <h1 className="text-7xl">
          Hi, I’m Gage <br /> I build audiences and grow brands through content.
        </h1>
        <div className="mt-12">
          I’ve organically scaled multiple social media channels from zero to over 500,000 followers, generating more
          than 200 million total views across YouTube and TikTok. Figuring out what makes people pay attention — and
          building repeatable systems that turn ideas into measurable growth is what I do.
        </div>
        <div className="mt-4">I like experimentation. I like momentum. I like when creativity meets strategy.</div>
      </div>
    </section>
  );
}
