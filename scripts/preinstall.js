const ANSI_RESET = '\u001B[0m';
const ANSI_RED_BACKGROUND = '\u001B[41m';
const ANSI_WHITE_BOLD = '\u001B[1;37m';

const throwError = () => {
  console.log();
  console.error(
    `  ${ANSI_RED_BACKGROUND}ERROR${ANSI_RESET}: this repo requires ${ANSI_WHITE_BOLD}pnpm${ANSI_RESET} as the package manager.

  If you don't have pnpm, go to https://pnpm.io/installation for more details`
  );
  console.log();
  process.exit(1);
};

// https://stackoverflow.com/questions/68133683/is-there-a-cross-platform-way-to-get-the-name-of-the-parent-process-in-node-js
const packageManagerAgentEnv = process.env.npm_config_user_agent;
if (!packageManagerAgentEnv) {
  throwError();
}

const packageManagerAgent = packageManagerAgentEnv.split(' ')[0];
const packageName = packageManagerAgent.split('/')[0];
if (packageName !== 'pnpm') {
  throwError();
}
