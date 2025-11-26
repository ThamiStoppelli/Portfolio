import React from "react";
import { Section } from "../../common/Section";
import githubIcon from "../../../assets/svgs/github.svg";
import linkedinIcon from "../../../assets/svgs/linked in.svg";
import emailIcon from "../../../assets/svgs/mail.svg";
import * as S from "./styles";

export const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Feel free to reach out for roles, collaborations or interesting projects."
    >
      <S.ContactGrid>
        <div>
          <S.Text>
            I’m currently open to frontend, UI/UX-focused and fullstack roles in
            international teams, especially remote positions where I can contribute to
            modern web products.
          </S.Text>
          <S.Text>
            If you’d like to talk about an opportunity, a project or just connect, you can
            reach me directly here:
          </S.Text>
        </div>

        <S.ContactList>
          <S.ContactItem href="mailto:thamiresstoppelli@gmail.com">
            <img src={emailIcon} alt="Email" />
            thamiresstoppelli@gmail.com
          </S.ContactItem>
          <S.ContactItem
            href="https://www.linkedin.com/in/thamires-stoppelli"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
            linkedin.com/in/thamires-stoppelli
          </S.ContactItem>
          <S.ContactItem
            href="https://github.com/ThamiStoppelli"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
            github.com/ThamiStoppelli
          </S.ContactItem>
        </S.ContactList>
      </S.ContactGrid>
    </Section>
  );
};
