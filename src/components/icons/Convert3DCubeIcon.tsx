import React from "react";
import styled from "styled-components";

type Props = {
  fill: string;
};
const Convert3DCubeIcon = ({ fill }: Props) => {
  const color = fill || "#292D32";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={color}
        d="M12.5 18.958a.621.621 0 01-.533-.942l.875-1.458a.624.624 0 01.858-.216c.3.175.392.558.217.858l-.225.375c2.3-.542 4.025-2.608 4.025-5.075a.63.63 0 01.625-.625.63.63 0 01.625.625c-.009 3.558-2.909 6.458-6.467 6.458zM1.667 8.125a.63.63 0 01-.625-.625c0-3.558 2.9-6.458 6.458-6.458a.621.621 0 01.533.942L7.158 3.45a.622.622 0 01-.858.208.622.622 0 01-.208-.858l.225-.375A5.218 5.218 0 002.292 7.5a.63.63 0 01-.625.625zM8.892 11.542l-2.617-1.409a.923.923 0 00-.883 0l-2.617 1.409a.596.596 0 00-.308.533c0 .225.116.434.308.534l2.617 1.408a.935.935 0 00.441.108c.15 0 .3-.033.442-.108l2.617-1.409a.596.596 0 00.308-.533.624.624 0 00-.308-.533zM4.958 14.508l-2.433-1.216a.606.606 0 00-.583.024.61.61 0 00-.275.509v2.3c0 .4.216.758.575.933l2.433 1.217a.73.73 0 00.267.058.598.598 0 00.6-.6v-2.3c0-.392-.225-.75-.584-.925zM9.717 13.316a.604.604 0 00-.584-.025L6.7 14.508a1.026 1.026 0 00-.575.934v2.3c0 .208.108.4.283.508.1.05.209.083.317.083a.6.6 0 00.267-.066l2.433-1.217c.358-.175.575-.534.575-.934v-2.3c0-.2-.108-.391-.283-.5zM17.225 3.192l-2.617-1.409a.923.923 0 00-.883 0l-2.617 1.409a.596.596 0 00-.308.533c0 .225.117.433.308.533l2.617 1.409a.935.935 0 00.442.108c.15 0 .3-.033.441-.108l2.617-1.409a.596.596 0 00.308-.533.603.603 0 00-.308-.533zM13.292 6.15l-2.434-1.217a.606.606 0 00-.583.025.61.61 0 00-.275.508v2.3c0 .4.217.759.575.934l2.433 1.216a.602.602 0 00.267.067.598.598 0 00.6-.6v-2.3c0-.4-.225-.758-.583-.933zM18.05 4.958a.604.604 0 00-.583-.025L15.033 6.15a1.026 1.026 0 00-.575.933v2.3a.598.598 0 00.867.533L17.758 8.7c.359-.184.575-.542.575-.934v-2.3c0-.208-.108-.4-.283-.508z"
      ></path>
    </svg>
  );
};

export default Convert3DCubeIcon;
