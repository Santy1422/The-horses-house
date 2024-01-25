import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

const FooterCardEvent = ({ isEventOn, isEventFinish, isEventOnComing, id, user, creadorId }) => { 
  // console.log('user', user, 'creadorid', creadorId)
  const { push } = useRouter();
  return (
    <div className="w-[298.67px] sm:w-[100%] h-11 justify-start items-center inline-flex">
      {isEventOn && (
        <Button
          action={() => push(`/dashboard/events/${id}`)}
          variant="primary"
          px="px-4"
          py="py-3"
          rounded="rounded"
          customStyle="flex flex-row items-center justify-center w-[50%]"
          descripcion={"Ver evento"}
          icon={<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="arrow-right">
              <path id="arrow-right_2" d="M14.9613 8.68182C14.9359 8.74315 14.8994 8.79842 14.8534 8.84442L10.1867 13.5111C10.0894 13.6084 9.96133 13.6577 9.83333 13.6577C9.70533 13.6577 9.57731 13.6091 9.47998 13.5111C9.28465 13.3158 9.28465 12.9991 9.47998 12.8037L13.2933 8.99041H2.5C2.224 8.99041 2 8.76641 2 8.49041C2 8.21441 2.224 7.99041 2.5 7.99041H13.2926L9.47933 4.1771C9.284 3.98177 9.284 3.66508 9.47933 3.46974C9.67466 3.27441 9.99135 3.27441 10.1867 3.46974L14.8534 8.13641C14.8994 8.18241 14.9359 8.23767 14.9613 8.29901C15.0119 8.42167 15.0119 8.55915 14.9613 8.68182Z" fill="#23254C"/>
            </g>
          </svg>}
          ></Button>
      )}

      {isEventFinish && (
        <Button
          action={() => push(`/dashboard/events/${id}`)}
          variant="primary"
          px="px-4"
          py="py-3"
          rounded="rounded"
          customStyle="flex flex-row items-center justify-center w-[50%]"
          descripcion={"Ver resultados"}
          ></Button>
      )}

      {isEventOnComing && (
        <div className="flex w-full gap-3 text-center">
          {user === creadorId ?
          <Button
            action={() => push(`/dashboard/events/${id}`)}
            variant="primary-alt"
            px="px-4"
            py="py-2.5"
            rounded="rounded"
            customStyle="h-11 border flex flex-row items-center justify-center w-[143.33px]"
            descripcion={"Editar"}
            icon={<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9585 6.02564C18.9593 5.4123 18.7211 4.83564 18.2869 4.40231L16.4302 2.54572C15.9961 2.11238 15.4211 1.87319 14.8069 1.87403C14.1936 1.87486 13.6177 2.11481 13.186 2.54897L2.89099 12.8915C2.77349 13.009 2.7085 13.1674 2.7085 13.3324V17.499C2.7085 17.844 2.9885 18.124 3.3335 18.124H7.50016C7.66516 18.124 7.82437 18.0582 7.94104 17.9423L18.2834 7.64653C18.7184 7.21486 18.9577 6.63897 18.9585 6.02564ZM7.24178 16.8748H3.9585V13.5916L11.4526 6.06317L14.7711 9.38064L7.24178 16.8748ZM17.4019 6.76152L15.6569 8.49898L12.3344 5.17735L14.0718 3.43154C14.2685 3.23404 14.5302 3.12567 14.8093 3.12484H14.8101C15.0885 3.12484 15.3501 3.23315 15.5476 3.42981L17.4043 5.2865C17.601 5.484 17.7093 5.74566 17.7093 6.02482C17.7085 6.30316 17.5994 6.56485 17.4019 6.76152ZM18.9585 17.4998C18.9585 17.8448 18.6785 18.1248 18.3335 18.1248H12.5002C12.1552 18.1248 11.8752 17.8448 11.8752 17.4998C11.8752 17.1548 12.1552 16.8748 12.5002 16.8748H18.3335C18.6785 16.8748 18.9585 17.1548 18.9585 17.4998Z" fill="#231D43"/>
            </svg>}
          ></Button>
          : null }

          <Button
            action={() => push(`/dashboard/events/${id}`)}
            variant="primary"
            px="px-4"
            py="py-2.4"
            rounded="rounded"
            customStyle="flex flex-row items-center justify-center w-[143.33px] h-11"
            descripcion={"Ver evento"}
            icon={<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="arrow-right">
                <path id="arrow-right_2" d="M14.9613 8.68182C14.9359 8.74315 14.8994 8.79842 14.8534 8.84442L10.1867 13.5111C10.0894 13.6084 9.96133 13.6577 9.83333 13.6577C9.70533 13.6577 9.57731 13.6091 9.47998 13.5111C9.28465 13.3158 9.28465 12.9991 9.47998 12.8037L13.2933 8.99041H2.5C2.224 8.99041 2 8.76641 2 8.49041C2 8.21441 2.224 7.99041 2.5 7.99041H13.2926L9.47933 4.1771C9.284 3.98177 9.284 3.66508 9.47933 3.46974C9.67466 3.27441 9.99135 3.27441 10.1867 3.46974L14.8534 8.13641C14.8994 8.18241 14.9359 8.23767 14.9613 8.29901C15.0119 8.42167 15.0119 8.55915 14.9613 8.68182Z" fill="#FFFFFF"/>
              </g>
            </svg>}
          ></Button>
        </div>
      )}
    </div>
  );
};

export default FooterCardEvent;
