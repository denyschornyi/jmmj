import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Logo = () => {
  const style = {
    cursor: "pointer"
  };
  return (
    <LinkS>
      <svg
        width="47"
        height="49"
        viewBox="0 0 47 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
      >
        <path
          d="M44.7604 6.96173C43.8233 6.96173 43.0688 7.70988 43.0688 8.63917L42.5764 34.4071C42.5764 35.6041 43.5532 36.5728 44.7604 36.5728C45.9676 36.5728 46.9444 35.6041 46.9444 34.4071L46.452 8.63917C46.452 7.70988 45.6975 6.96173 44.7604 6.96173Z"
          fill="black"
        />
        <path
          d="M46.8421 2.99035C47.3037 1.88529 46.7745 0.618389 45.6601 0.160647C44.5457 -0.297094 43.268 0.227663 42.8064 1.33273C42.3448 2.43779 42.874 3.70469 43.9884 4.16243C45.1028 4.62017 46.3805 4.09542 46.8421 2.99035Z"
          fill="black"
        />
        <path
          d="M2.19946 19.3968C1.26232 19.3968 0.507838 20.1449 0.507838 21.0742L0.0154419 46.8343C0.0154419 48.0313 0.992292 49 2.19946 49C3.40662 49 4.38347 48.0313 4.38347 46.8343L3.89108 21.0742C3.89108 20.1449 3.1366 19.3968 2.19946 19.3968Z"
          fill="black"
        />
        <path
          d="M2.18402 16.7586C3.39021 16.7586 4.36803 15.789 4.36803 14.5929C4.36803 13.3968 3.39021 12.4272 2.18402 12.4272C0.977817 12.4272 0 13.3968 0 14.5929C0 15.789 0.977817 16.7586 2.18402 16.7586Z"
          fill="black"
        />
        <path
          d="M35.5875 9.92286C35.4764 9.89923 35.3652 9.89136 35.246 9.89136C35.1269 9.89136 34.9998 9.90711 34.8887 9.93073C33.3876 10.0489 32.0931 10.8758 31.3307 12.0649C30.8304 11.8366 30.2903 11.6948 29.7185 11.6633C29.6073 11.6397 29.4882 11.6239 29.3691 11.6239C29.242 11.6239 29.1229 11.6397 29.0037 11.6633C26.6212 11.8602 24.7469 13.8447 24.7469 16.2625C24.7469 16.3727 24.7548 16.483 24.7628 16.5853V26.1066C24.7628 27.0358 25.5172 27.784 26.4544 27.784C27.3915 27.784 28.146 27.0358 28.146 26.1066V20.7041V16.1916C28.1698 15.5301 28.7178 14.9945 29.3929 14.9945C30.0679 14.9945 30.6159 15.5222 30.6398 16.1916V20.7041V24.4134C30.6556 25.3269 31.4022 26.0672 32.3314 26.0672C33.2606 26.0672 34.0071 25.3269 34.023 24.4134V18.9716V14.522C34.023 14.5141 34.023 14.5063 34.023 14.4984C34.023 13.8132 34.5869 13.2541 35.2778 13.2541C35.9688 13.2541 36.5326 13.8132 36.5326 14.4984C36.5326 14.5063 36.5326 14.5141 36.5326 14.522V18.9558H36.5406V22.6493C36.5406 22.6572 36.5406 22.6651 36.5406 22.6808C36.5406 23.6101 37.295 24.3582 38.2322 24.3582C39.1137 24.3582 39.8364 23.6888 39.9159 22.8304C39.9238 22.7753 39.9238 22.7123 39.9238 22.6572V14.4984H39.9079C39.9 12.0728 37.9939 10.0882 35.5875 9.92286Z"
          fill="black"
        />
        <path
          d="M17.7978 15.1205C17.6866 15.0969 17.5754 15.089 17.4563 15.089C17.3371 15.089 17.2101 15.1047 17.0989 15.1284C15.5979 15.2465 14.3033 16.0734 13.5409 17.2626C13.0406 17.0342 12.5005 16.8924 11.9287 16.8609C11.8175 16.8373 11.6984 16.8216 11.5793 16.8216C11.4522 16.8216 11.3331 16.8373 11.2139 16.8609C8.83137 17.0578 6.95709 19.0424 6.95709 21.4601C6.95709 21.5703 6.96503 21.6806 6.97298 21.783V31.3042C6.97298 32.2335 7.72745 32.9816 8.6646 32.9816C9.60174 32.9816 10.3562 32.2335 10.3562 31.3042V25.9018V21.3892C10.38 20.7277 10.928 20.1922 11.6031 20.1922C12.2781 20.1922 12.8261 20.7198 12.85 21.3892V25.9018V29.611C12.8658 30.5245 13.6124 31.2648 14.5416 31.2648C15.4708 31.2648 16.2173 30.5245 16.2332 29.611V24.1692V19.7197C16.2332 19.7118 16.2332 19.7039 16.2332 19.696C16.2332 19.0109 16.7971 18.4517 17.488 18.4517C18.179 18.4517 18.7428 19.0109 18.7428 19.696C18.7428 19.7039 18.7428 19.7118 18.7428 19.7197V24.1534H18.7508V27.8469C18.7508 27.8548 18.7508 27.8627 18.7508 27.8784C18.7508 28.8077 19.5053 29.5559 20.4424 29.5559C21.3239 29.5559 22.0467 28.8865 22.1261 28.0281C22.134 27.9729 22.134 27.9099 22.134 27.8548V19.696H22.1181C22.1102 17.2704 20.2041 15.2859 17.7978 15.1205Z"
          fill="black"
        />
      </svg>
    </LinkS>
  );
};

export const Nav = styled.nav`
  background: #fefeff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarConrtainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 20px 24px;
  max-width: 1100px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 920px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.a`
  color: #373f41;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const NavBtnLinkOutlined = styled(LinkS)`
  color: #3c64b1;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  margin-right: 20px;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  border: 2px solid transparent;
  padding: 10px 22px;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid #3c64b1;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavBtnLink = styled(LinkS)`
  color: #fff;
  background: #3c64b1;
  font-size: 16px;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 10px 22px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #0a327f;
    transition: all 0.2s ease-in-out;
  }
`;
