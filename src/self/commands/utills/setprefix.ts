import type { SelfCommandType } from "../../../../types/self_commands.d.ts";

export const command: SelfCommandType = {
    name: 'setprefix',
    description: 'Defines a new prefix for the selfbot',
    category: "utils",
    callback: (client, message, args) => {
        let newPrefix = args[0];

        if (!newPrefix) return message.reply("You need to provide a new prefix");

        // if the new prefix is the same as the current prefix
        if (newPrefix === client.config?.selfbot_prefix) return message.reply("The new prefix is the same as the current prefix");

        // if prefix too long
        if (newPrefix.length > 5) return message.reply("The new prefix is too long");

        client.db.set("prefix", newPrefix);
        message.edit(`Prefix set to ${newPrefix}`);
    }
}