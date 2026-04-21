import {test as projectIsHostedOnGitea} from '@form8ion/gitea';

export default function qualify({projectRoot}) {
  return projectIsHostedOnGitea({projectRoot});
}
