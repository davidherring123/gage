import { Marquee } from "./ui/marquee";

const logos = [
  { src: '/logos/ArenaClub_Logo.png', alt: 'Arena Club Logo' },
  { src: '/logos/Ekster_logo.jpg', alt: 'Ekster Logo' },
  { src: '/logos/AG1_Logo.png', alt: 'AG1 Logo' },
  { src: '/logos/Vessi_Logo.jpg', alt: 'Vessi Logo' },
  { src: '/logos/NordVPN_Logo.png', alt: 'NordVPN Logo' },
  { src: '/logos/SeatGeek_Logo.png', alt: 'SeatGeek Logo', text: true },
  { src: '/logos/Underdog_Logo.png', alt: 'Underdog Logo' },
  { src: '/logos/BetterHelp_Logo.png', alt: 'BetterHelp Logo', text: true },
];

export function SponsorMarquee() {
    return (
        <div className="sponsor-marquee-gradient py-4">
            <Marquee className="[--gap:3rem]">
                {logos.map((logo) =>
                logo.text ? (
                    <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 w-auto object-contain"
                    />
                ) : (
                    <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 w-20 rounded-full object-cover"
                    />
                )
                )}
        </Marquee>
        </div>
    );
}