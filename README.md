# Marvel SNAP Manual Archipelago World

**⚠ This world is currently a Work In Progress! ⚠**

Play Marvel SNAP in a random draft-like format with other people playing various games via Archipelago! Uses the Manual Client for Archipelago.

## How it works
You're given a deck of 12 random cards at the start. Your goal is to beat Gold Conquest and collect an Infinity Ticket, but you must only use tickets gained during your run (in other words, pretend you start with zero). You get checks by taking cubes off your opponent*, which can contain items from other players' games or cards for your deck. In Proving Grounds, every 3 cubes of health taken from a single opponent is a check, in Silver Conquest, every 2 cubes, and in Gold Conquest, *every single cube* is worth a check! Additionally, checks are rewarded for collecting tickets: one for a silver ticket and five for a gold ticket. As players collect their check locations, you'll be provided more cards with which to tweak your deck, until you ultimately beat Gold Conquest, acquire your Infinity Ticket, and achieve victory!

*Which events trigger check locations is currently in a heavy iteration phase. If you try this, let me know how you felt about the frequency of checks!

## Installation

This is a "Manual Archipelago World," which means it requires both the Archipelago Generator and the Manual Client. You can get more information on manual Archipelago worlds and download the client from the [Manual Archipelago Discord Server][discord]. Once you have that set up, simply download the latest `.apworld` file from the [Releases][github-releases] section and put it in your `lib/worlds/` folder within your Archipelago installation. You can then add a `.yaml` file to the `Players/` folder, generate a seed, and connect to a local or remote server with the Manual Client! Make sure your Manual Game ID is set to `Manual_MarvelSNAP_JHobz` (do NOT replace "JHobz" with your own name).

[github-releases]: https://github.com/jhobz/Archipelago-Manual-MarvelSNAP/releases
[discord]: https://discord.gg/RxMvnw4hpA