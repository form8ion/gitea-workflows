import {promises as fs} from 'node:fs';

export default async function lift({projectRoot}) {
  await fs.rm(`${projectRoot}/.gitea/.gitkeep`, {force: true});

  return {};
}
