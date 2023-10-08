import { GithubStarPayload } from '../../interfaces/github-star.interface';
import { GithubIssuePayload } from '../../interfaces/github-issue.interface';

export class GithubService {
  constructor() {}

  onStar(payload: GithubStarPayload): string {
    let message: string = '';
    const { action, sender, repository, starred_at } = payload;

    if (starred_at) {
      message = `User ${sender.login} starred ${repository.full_name} at ${starred_at}`;
    } else {
      message = `User ${sender.login} unstarred ${repository.full_name}`;
    }

    return message;
  }

  onIssue(payload: GithubIssuePayload): string {
    const { action, issue } = payload;

    if (action === 'opened') {
      return `New issue ${issue.title} was opened by ${issue.user.login}`;
    } else if (action === 'closed') {
      return `Issue ${issue.title} was closed by ${issue.user.login}`;
    } else if (action === 'reopened') {
      return `Issue ${issue.title} was reopened by ${issue.user.login}`;
    } else {
      return `Unknown issue action ${action}`;
    }
  }
}
