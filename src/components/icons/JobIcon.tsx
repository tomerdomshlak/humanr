import React from "react";

type Props = {
  fill: string;
};
function JobIcon({ fill }: Props) {
  const color = fill || "#292D32";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M18.667 6.86H15.96v-.922A2.938 2.938 0 0013.022 3h-1.785A2.926 2.926 0 008.28 5.92v.921H5.573A2.573 2.573 0 003 9.413v2.246c.845.25 1.997.519 3.533.73v-.058c0-.883.71-1.593 1.593-1.593h.903c.883 0 1.593.71 1.593 1.593v.346c.48.02.98.02 1.498.02s1.018 0 1.478-.02v-.346c0-.883.71-1.593 1.594-1.593h.902c.884 0 1.594.71 1.594 1.593v.077c1.536-.192 2.688-.46 3.533-.73V9.432a2.533 2.533 0 00-2.554-2.573zm-8.179 0v-.922a.73.73 0 01.73-.73h1.785a.73.73 0 01.73.73v.921h-3.245zM17.707 14.27a1.59 1.59 0 01-1.593 1.594h-.903a1.59 1.59 0 01-1.593-1.593v-.384c-.48.019-.98.019-1.479.019-.518 0-1.017 0-1.497-.02v.385a1.59 1.59 0 01-1.594 1.593h-.902a1.59 1.59 0 01-1.594-1.593v-.673c-1.478-.192-2.63-.422-3.533-.672v4.82a2.573 2.573 0 002.573 2.572h13.094a2.573 2.573 0 002.573-2.572v-4.838c-.902.25-2.054.499-3.533.672v.69h-.019z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color}
        fillRule="evenodd"
        d="M9.029 14.693c.23 0 .422-.192.422-.422v-1.92a.426.426 0 00-.422-.423h-.903a.426.426 0 00-.422.423v1.92c0 .23.192.422.422.422h.903zM16.114 14.693c.23 0 .422-.192.422-.422v-1.92a.426.426 0 00-.422-.423h-.903a.426.426 0 00-.422.423v1.92c0 .23.192.422.422.422h.903z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default JobIcon;
