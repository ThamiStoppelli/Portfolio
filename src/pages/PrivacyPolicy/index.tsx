import * as S from "./styles";

export default function PrivacyPolicy() {
  return (
    <S.Page>
      <S.TopRow>
        <S.BackLink to="/project/timecurrencyapp">
          ← View Global Context case study
        </S.BackLink>
      </S.TopRow>

      <S.Hero>
        <S.Eyebrow>Global Context</S.Eyebrow>
        <h1>Privacy Policy</h1>
        <S.Intro>
          A simple overview of how Global Context handles data and protects
          your privacy.
        </S.Intro>
        <S.Updated>Last updated: August 25, 2026</S.Updated>
      </S.Hero>

      <S.Content>
        <section>
          <h2>About Global Context</h2>
          <p>
            Global Context is a utility application that provides time,
            weather, and currency information in one place.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>
            Global Context does not require users to create an account or
            provide personal information such as their name, email address,
            or phone number.
          </p>

          <p>
            The app may access approximate location information when needed to
            provide weather information relevant to the user's location.
          </p>

          <p>
            Location information is used only to provide this functionality
            and is not used for advertising or marketing purposes.
          </p>
        </section>

        <section>
          <h2>Third Party Services</h2>
          <p>
            Global Context uses third party services to provide certain
            functionality, including weather and currency information.
            Information necessary to perform these requests may be transmitted
            securely to these services.
          </p>
        </section>

        <section>
          <h2>Advertising</h2>
          <p>
            Global Context does not display advertisements and does not use
            user information for advertising purposes.
          </p>
        </section>

        <section>
          <h2>Data Storage</h2>
          <p>
            The app may store preferences and settings locally on the user's
            device. Global Context does not maintain user accounts or a
            database containing users' personal information.
          </p>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Global Context is not specifically directed at children and does
            not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            This Privacy Policy may be updated if the application's
            functionality or data practices change. Any updates will be
            reflected on this page.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, you can contact
            me at:
          </p>

          <S.Email href="mailto:thamiresstoppelli@gmail.com">
            thamiresstoppelli@gmail.com
          </S.Email>
        </section>
      </S.Content>

      <S.Footer>
        <span>Global Context</span>
        <S.ProjectLink to="/project/timecurrencyapp">
          Go to Global Context App →
        </S.ProjectLink>
      </S.Footer>
    </S.Page>
  );
}