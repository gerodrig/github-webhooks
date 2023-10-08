import { envs } from '../../config/';

export class DiscordService {
  private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL;

  constructor() {}

  async notify(message: string): Promise<boolean> {
    const body = {
      content: message,
    //   embeds: [
    //     {
    //       image: {
    //         url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanA3dGlyZjVuNzRvY3l5ZjU5OTh5dzA1NnVqdHUyYnRwMW91bXhrMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z2l5ZTJmpqbNS/giphy.gif',
    //       },
    //     },
    //   ],
    };

    const response = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return false;
    }

    return true;
  }
}
