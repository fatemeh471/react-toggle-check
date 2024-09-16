export const FixWarningDockerBuild = ({ message }) => {
  if (/Use of eval in/.test(message)) {
    return;
  }
};
