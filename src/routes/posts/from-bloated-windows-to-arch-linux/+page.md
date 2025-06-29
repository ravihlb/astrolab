<script lang="ts">
    import almostSolvedCube from './img/almost-solved-rubiks-cube.jpg'
    import embraceThePower from './img/embrace-the-power-of-the-command-line.png'
    import gnus from './img/gnus.jpg'
    import notifications from './img/notifications-everywhere.jpg'
    import scatteredCube from './img/scattered-rubiks-cube.jpg'
    import slime from './img/slime.jpg'
    import cover from './img/cover.jpg'

    import MechanicalKeyboardYtEmbed from './MechanicalKeyboardYtEmbed.svelte'
    import ImageContainer from '@components/shared/ImageContainer.svelte'
    import PostInfo from '@components/posts/PostInfo.svelte'
    import PostTitles from '@components/posts/PostTitles.svelte'

    import metadata from './metadata'

    const { title, subtitle, date, authors, coverImg } = metadata
</script>

<PostTitles metadata={metadata} />
<br />
<ImageContainer src={cover} alt="A completely disassembled Rubik's Cube, its colored pieces lying scattered atop a white background" />
<br />
<PostInfo metadata={metadata} />
<br />

Nowadays, [about 69% of desktop computer users are using Windows](https://gs.statcounter.com/os-market-share/desktop/worldwide/#monthly-202211-202311).
Windows is a system that seems primarily concerned with:
    1. generating revenue for Microsoft through licensing sales
    2. ease of use through "intuitive" GUIs
    3. usability and clarity over efficient and proficient use of technology

These three priorities result in a system that is very far from minimal.
Apple's systems seem a bit better in terms of minimalism, but both of these
companies' code is practically all proprietary, which is frankly a retrograde business model. Open source software has more than proved its efficacy and safety advantages over the closed source model.

Notice that when I say minimalism, what I really mean is how many layers of abstraction are between you, the user, and the actual hardware on top of which the software runs - or, how much the system tries to hide the underlying structures holding it together. UNIX based systems generally don't ever really try that hard to hide, they in fact encourage usage of the terminal for things we consider very basic for today's standards, like downloading and installing new software.

I was always interested in learning how stuff works. As a kid I used to grab any type of electronic or machine and try to explore every nook and cranny of it, trying to understand just what kind of stuff was possible to **do** with it and infer how it all worked together. Whenever a friend of my parents had a new type of phone, laptop, watch, anything, really, I asked if I could borrow it while they talked about boring adult life stuff and I inevitably ended up finding some game or some interesting feature that they had no idea was actually in that device.
I fondly remember once finding out a "demo" version of Sonic 1 in a Sony Ericsson flip phone.

Anyway, I always liked to explore how technology works. Especially software. I explored the shit out of the Windows 98 we had at home, and that marked the start of my journey into IT.

## Why Minimalism

The definition for minimalism found on [Wiktionary](https://en.wiktionary.org/wiki/minimalism) is:

"(art) A style of art that emphasises extreme simplicity of form."

I'd like to concentrate on the *simplicity of form* part of the definition. Simplicity of form should allow the user to concentrate on the most essential and useful parts of the system. Having to organize a few important things is a lot better than having to organize a myriad of different things that may be useful from time to time, but that most of the time, are there just bloating up the system.

At the end of the day, this question itself boils down to:

## Why are we using computers anyway?

As a kid I used computers as a gaming device, mainly. We had that Windows 98 machine at home and the only entertainment available there was either browsing for fan-made Sonic The Hedgehog webcomics or freaking MS Paint. So you can imagine the joy I felt when I got a CD with 1000 small Macromedia Flash games and a few `.exes` as well, along with things like the *Bug! Demo* and *Sonic Roboblast 2*, man, what a blast from the past!
Anyway, that was all before computers became *Harder, Better, Faster, Stronger* and internet bandwidth speeds with them.
Nowadays we even find it strange if you don't bring your own tiny, portable, incredibly versatile personal ~~surveillance device~~ computer with you when going out the house.

We use the damn things for everything! From the most practical, useful stuff, like street maps or messaging apps to the most useless garbage like beer drinking physics simulation lmao.

Anyways, **why** are we using computers after all?
Technically, smartphones are computers running a mobile-first operating system, but you know I'm really asking about desktop or laptop computers with their big monitors and flashy RGB gaming mechanical keyboards.

<MechanicalKeyboardYtEmbed />
<p class="caption">
    It's a short one, I promise
</p>

The thing is, if you'll be working with computers for the rest of your foreseeable future, wouldn't it be best for you and your mental health to have the cleanest, most tranquil, distraction-free environment to flourish your professional skills and creativity, which are, really, the things that really matter when using these machines?

What I'm aiming for when I work on a computer is that zen-like flow state. No distractions. Nothing outside the context of the work itself.
This is why I believe we, the users should decide what goes in and out of our own digital medium. This should be no algorithm's job.

Also, there is just so much damn noise in the internet nowadays that trying to catch up with everything you're interested in will for sure either drive you insane or just exhausted before you've seen even 1% of the stuff. With so much damn information easily available nowadays, **the ability to focus** actually becomes your most useful skill and having distractions hijacking your attention all the time (like notifications) is a big no-no.

<ImageContainer src="{notifications}" alt="Buzz Lightyear from Toy Story with Woody meme, with a text on the bottom of the image, saying 'notifications everywhere'" />

Also, if you're reading this, you're probably as much into the more technical side of computers as I am? 
Have you ever wondered about how your Operational System is put together? Things like "Oh, that's a pretty neat clock on the taskbar. I wonder how they made something like that."
Then you should probably try out a minimal Linux installation at some point. Take Arch Linux, for example. Manually configuring your own network driver and manager, window manager, session manager, etc. should give you a taste of what putting an OS together actually looks like. And, if you're into all this stuff, it can be really fun to tinker with what could be thinked of as "low level software".

The point here is that Linux offers you the ability to set up your digital environment to be as distraction-free as you want, and that is really something to keep in mind when choosing your digital daily driver. There is currently no other platform that's as versatile in terms of customization as a Linux machine is.

In this post I'll share some key points of my journey from knowing nothing about computers at all to using Arch as my daily driver, mainly for programming. I hope this can inspire some of you, or that you can glimpse something useful out of my digital shenannigans.

## Learning to Windows 
### The GUI

<ImageContainer
    src={slime}
    alt="Hand squeezing orange, gooey slime"
    caption={`
        Source: 
        <a href="https://www.pexels.com/photo/person-squeezing-orange-liquid-5875710/" target="_blank">
            cottonbro studio on Pexels
        </a>
    `}
/>

Everyone has to start somewhere. As mentioned before, the great, great majority of people still use Windows as their daily driver OS. Sure, there's a considerable learning curve before you can weave your way through a Unix system and that *"spooky"* terminal! But a GUI system also has one, maybe a bit smaller, but, still.

A GUI system will show all of your options visually by default whereas a terminal-centric OS will show you only what you prompt it to show you. You could make a case that this just ends up being a hassle for new users, but it also makes them way more flexible. A UNIX-based system makes very few assumptions on how you want to use your system and this makes it possible for it to be incredibly versatile.

When you first start using Windows, it looks like an almost completely solved Rubik's cube. Everything seems to be in its right place. Everything's already set up and ready to go and the only things you actually need to set up is your internet connection and maybe some programs you've gotten used to.

<ImageContainer src="{almostSolvedCube}" alt="An almost solved Rubik's cube, with only 2 blocks left to solve."/>

This actually goes to the majority of Linux distros as well. It's just that under the GUI, it's much easier to customize and/or access the OS's internals.

The Windows control panel allows for some level of customization and configuration of your system. Although, keep in mind that the more intricate stuff is still locked away behind a paid Windows Pro license. And this is never true for Linux-based systems. On them, you always have access to everything on your system, which makes it much more interesting and welcoming to so-called "power users".

## `Win+R, >cmd, Enter`

A blank screen. Blinking cursor. Monospace font, and everything you can do is just a few keystrokes away.
In the days of yore you had to read a manual to understand basic functionality and commands. Nowadays you just look up tutorials for that kind of stuff. You learn some basic commands, like `dir` on Windows, or `ls` on Linux, `cd`, on both, etc. and off you go.

I find it very fun to navigate the system solely by using commands. Especially once you learn to type fast, then there are almost no barriers between your thought process and the machine itself. **You** start defining what the boundaries are, instead of the graphical user interface.
Once using the command line turns into second nature, you start turning into a digital speed demon. You can navigate directories, create, read, edit and delete files and open up programs faster than ever. It feels good! Makes you feel productive, or, "professional" in a way. It's you who is dominating the machine now, and not the other way around.
Knowing how to use the command line well makes you a more powerful user and is one of the most useful, if not essential, skills for a software developer/systems administrator.

At this point, you have some idea of what is possible to do with the command line. But you want to go deeper.

## Entering the Herd - Welcome Linux

<ImageContainer
    src={gnus}
    alt='Gnus standing in field in countryside in daylight'
    caption={`
        Source: 
        <a href="https://www.pexels.com/photo/gnus-standing-in-field-in-countryside-in-daylight-6053002/" target="_blank">
            Antony Trivet on Pexels
        </a>
    `}
/>

So, you decide to try out Ubuntu, since it's the Linux distro pretty much everyone is using at work. It comes with some stuff pre-installed. Your browser is Firefox but you're more used to Chrome and your company's [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) doesn't officially support Firefox anyway. You then look up how to install Chrome. There's a package installer with a curious file extension you never saw before, `.deb`. You look it up and find out it stands for "**Deb**ian software package", read a little bit about it and also find out that your newly installed distro is actually based on top of Debian, one of the oldest and most widely used Linux distributions.

You see that it's just a matter of downloading that `.deb` file and double-clicking it through your file manager, but, since you've decided to get more accustomed to the command line, you look up how to do it through the terminal itself.

`apt`, the Advanced Package Tool, "the main command line package manager for Debian and its derivatives" seems to be where it's at. So you find a guide on how to do it, copy some commands to add the repo and, finally type in
```
sudo apt install google-chrome-stable
```
<ImageContainer src={embraceThePower} alt='Darth Sirius from Star Wars, display text saying "EMBRACE THE POWER OF THE COMMAND LINE" ominously' />

## Above and Beyond - The Great Arch

For me, the definitive [Arch Linux](https://archlinux.org/) "killer app" is the [AUR](https://wiki.archlinux.org/title/Arch_User_Repository), the community-curated centralized repository for practically anything you'd want to install on your machine. 

It's so good people have started to create their own versions of `pacman` + AUR for debian-based distros: 
    * [`makedeb`](https://github.com/makedeb) - *"A simplicity-focused packaging tool for Debian archives" (+ repo)*
    * [`pacstall`](https://pacstall.dev/) - *"The AUR for Ubuntu" (+ package manager)*

Although something tells me they're always going to be a bit behind the AUR itself.
MPR, The `makedeb` Package Repository has around 760 packages and `pacstall` seems to have something close to 500.

I'm sure they work great, but good luck getting even close to the **92637** packages the AUR has today.

Anyways, Arch Linux just doesn't care about how "accessible" it is for beginners, meaning how _easy_ it is to install and get into.

Until 2022 we didn't even have `archinstall`, the install script for faster installation. Even with this script, you still pretty much have to follow a guide, either from [Mental Outlaw on Youtube](https://www.youtube.com/watch?v=G-mLyrHonvU) or the [Arch Wiki](https://wiki.archlinux.org/) (which has pretty much everything you need to know about using Linux btw).

(Arch) Linux is really minimal. You can choose everything and anything you want. Don't want/need a display manager? Fine, go ahead with your barebones TTY. Want to go offline-only? You don't even need to setup networking. Its configuration is very granular. Sure, you can always just go [Linux from scratch](https://linuxfromscratch.org/), but I'm not going down that rabbit hole ~~(yet)~~. I'm sure it's a great learning experience, though.

<ImageContainer src={scatteredCube} alt="Scattered pieces of a disassembled Rubik's cube with a cleared pathway throgh the middle, leading to the core piece of the cube."/>

When you install Arch by going the traditional route, your system is like a torn-down, pieces-scattered Rubik's Cube.

I'm more than satisfied with the system-level customization and configuration options Arch enables and very happy with the plethora of resources the Arch Wiki hosts.

If games ran as well on Linux as they do on Windows, I wouldn't ever bother installing it again. Fortunately, thanks to Valve's work on Proton and the Steam Deck, this is more and more becoming a reality and I'm really glad we're going down that road.

And that's why I use Arch btw.
