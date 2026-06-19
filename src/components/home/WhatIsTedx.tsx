export function WhatIsTedx() {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container-x max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl">
          What is <span className="text-primary">TEDx</span>?
        </h2>
        <div className="mt-6 space-y-4 text-base md:text-lg text-foreground/80 text-left">
          <p>
            In the spirit of discovering and spreading ideas, TED has created a program called
            TEDx. TEDx is a program of local, self-organized events that bring people together to
            share a TED-like experience.
          </p>
          <p>
            Our event is called TEDxCongaree Vista, where x = independently organized TED event.
            At our TEDxCongaree Vista event, TED Talks video and live speakers will combine to
            spark deep discussion and connection in a small group. The TED Conference provides
            general guidance for the TEDx program, but individual TEDx events, including ours,
            are self-organized.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="https://www.ted.com/about/programs-initiatives/tedx-program"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition shadow-md"
          >
            Learn more about the TEDx program
          </a>
        </div>
      </div>
    </section>
  );
}
