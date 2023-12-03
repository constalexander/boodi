// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './privacy-policy.module.scss';

/* eslint-disable-next-line */
export interface PrivacyPolicyProps {}

export function PrivacyPolicy(props: PrivacyPolicyProps) {
  return (
    <div className={'p-5 max-w-[800px] px-[60px] mx-auto'}>
      <h1>Privacy Policy</h1>
      <p className={'mt-5'}>
        <strong>
          Effective Date: November 15, 2023
          <br />
          Last Revised: November 15, 2023
        </strong>
      </p>
      <p className={'mt-5'}>
        Welcome to the Boodi platform. Your privacy and the security of your
        data are of paramount importance to us. This Privacy Policy outlines how
        we collect, use, and protect your information.
      </p>

      <h2 className={'text-md my-5'}>1. Information Collection:</h2>
      <ul className={'list-disc pl-5'}>
        <li>
          <strong>Data Provided by Users: </strong>We collect information that
          you provide directly when using the Boodi platform. This includes
          responses to prompts, questions asked to Boodi, and any feedback or
          communication with our team.
        </li>
        <li className={'mt-2'}>
          <strong>Usage Data: </strong>We automatically collect information on
          how the service is accessed and used. This includes data like your
          device's Internet Protocol (IP) address, browser type, browser
          version, and the pages of our platform that you visit.
        </li>
      </ul>

      <h2 className={'text-md my-5'}>2. Use of Information:</h2>
      <ul className={'list-disc pl-5'}>
        <li>
          <strong>To Provide and Maintain Our Service: </strong>Your information
          helps us to improve and personalize your experience on the platform.
        </li>
        <li className={'mt-2'}>
          <strong>Communication: </strong>We may use your information to respond
          to your inquiries, provide customer support, and send updates about
          the platform.
        </li>
        <li className={'mt-2'}>
          <strong>Analytics and Improvement: </strong>To monitor the usage of
          our platform and gather data to enhance and develop our services. For
          improving our AI and understanding stress patterns.
        </li>
        <li className={'mt-2'}>
          <strong>Content Creation: </strong>Anonymized responses may be used
          for articles, books, etc.
        </li>
      </ul>

      <h2 className={'text-md my-5'}>3. Data Sharing and Disclosure:</h2>
      <ul className={'list-disc pl-5'}>
        <li>We do not sell your personal data to third parties.</li>
        <li className={'mt-2'}>
          We may share your data with trusted third parties who assist us in
          operating our platform, conducting our business, or serving our users,
          so long as those parties agree to keep this information confidential.
        </li>
        <li className={'mt-2'}>
          We may also release information when its release is appropriate to
          comply with the law, enforce our site policies, or protect ours or
          others' rights, property, or safety.
        </li>
        <li className={'mt-2'}>
          <strong>Content Usage for Publication: </strong>We may use the
          responses generated from your messages to create articles, books, and
          other forms of publications. These will be used to promote mindfulness
          and provide guidance to a wider audience. When using your responses,
          we will ensure that all personally identifiable information is removed
          to maintain your anonymity and confidentiality.
        </li>
      </ul>

      <p className={'mt-5'}>
        <strong className={'text-md'}>4. Analytics and Research: </strong>We
        utilize data analytics to enhance the Boodi platform's functionality and
        user experience. This process involves analyzing usage patterns,
        response effectiveness, and user engagement to continually refine our AI
        algorithms. Additionally, we conduct research on wellness and stress
        management trends, contributing to the broader understanding of these
        areas. Be assured, all personal identifiers are removed from this data
        to ensure your anonymity and privacy. The insights gained are solely
        used to improve our services and contribute to the field of wellness
        research.
      </p>

      <p className={'mt-5'}>
        <strong className={'text-md'}>
          5. Third-Party Service Providers:{' '}
        </strong>
        To optimize the Boodi platform, we work with trusted third-party service
        providers. These partners may include cloud hosting services, analytics
        companies, and customer support platforms. They assist us in various
        aspects like data processing, storage, and technical maintenance. We
        ensure these providers adhere to strict data protection and
        confidentiality protocols. Their access to your data is limited to the
        necessary scope required to perform these services and is governed by
        our privacy commitments and legal agreements.
      </p>

      <p className={'mt-5'}>
        <strong className={'text-md'}>6. User Consent for Data Usage: </strong>
        By using the Boodi platform, you provide us with consent to use your
        anonymized data. This includes the analysis for platform improvement,
        creation of wellness content, and research purposes. We respect your
        privacy; thus, any data used will be stripped of personal identifiers.
        This practice allows us to tailor our platform to better meet user needs
        and develop content that addresses common stressors and wellness
        queries. You have the right to withdraw this consent at any time by
        contacting us or adjusting your user settings.
      </p>

      <p className={'mt-5'}>
        <strong className={'text-md'}>7. Data Retention and Deletion: </strong>
        We retain your personal data only for as long as necessary to provide
        you with our services and for legitimate and essential business
        purposes, such as maintaining the performance of the Boodi platform,
        making data-driven business decisions, complying with our legal
        obligations, and resolving disputes. If you no longer want us to use
        your information, you can request that we erase your personal data.
        Please note that if you request the deletion of your information, we
        might retain some of your data as necessary for our legitimate business
        interests, such as fraud detection and enhancing safety. For all
        requests regarding personal data deletion, please contact us through the
        provided channels.
      </p>

      <p className={'mt-5'}>
        <strong className={'text-md'}>8. Children’s Privacy: </strong>The Boodi
        platform is not intended for children under the age of 13. We do not
        knowingly collect personal identifiable information from children under
        this age. If you are a parent or guardian and believe that your child
        has provided us with personal information, please contact us immediately
        for steps to remove this data. We are committed to protecting children’s
        privacy and safety online and comply with all applicable laws and
        regulations regarding the protection of children’s data.
      </p>

      <p className={'mt-5'}>
        <strong className={'text-md'}>9. International Data Transfer: </strong>
        In providing our services, we may transfer, store, and process your
        information in countries other than your own. Our servers and
        third-party service providers may be located in countries with different
        data protection laws than those in your country of residence. By using
        the Boodi platform, you consent to the transfer of your data to these
        countries. We take appropriate safeguards to ensure that your personal
        data remains protected according to this privacy policy and applicable
        laws. These measures include data transfer agreements implementing
        standard data protection clauses.
      </p>

      <p className={'mt-5'}>
        <strong className={'text-md'}>10. User Rights and Control: </strong>As a
        user of the Boodi platform, you have certain rights concerning the
        personal data we hold about you. These rights include:
      </p>
      <ul className={'list-disc pl-5'}>
        <li className={'mt-5'}>
          <strong>Access: </strong>You have the right to know what personal data
          we hold about you and to request a copy of your data.
        </li>
        <li className={'mt-2'}>
          <strong>Correction: </strong>If you believe that any information we
          have on you is incorrect or incomplete, you can request that we
          correct or supplement it.
        </li>
        <li className={'mt-2'}>
          <strong>Data Portability: </strong>You have the right to receive a
          copy of your personal data in a structured, commonly used, and
          machine-readable format and/or request us to transmit this data to
          another service provider (where technically feasible).
        </li>
        <li className={'mt-2'}>
          <strong>Deletion: </strong>You can request that we delete your
          personal data, subject to certain exceptions.
        </li>
        <li className={'mt-2'}>
          <strong>Withdraw Consent: </strong>Where we rely on your consent to
          process your personal data, you have the right to withdraw that
          consent at any time.
        </li>
      </ul>
      <p className={'mt-5'}>
        To exercise any of these rights, please contact us using the contact
        information provided. We will respond to your request in accordance with
        applicable law.
      </p>

      <p className={'mt-5'}>
        <strong className={'text-md'}>11. Changes to the Policy: </strong>This
        Privacy Policy may be updated or modified in the future. We will notify
        you of any changes by posting the new Privacy Policy on this page. This
        privacy policy may be updated periodically to reflect changes in our
        personal data practices or relevant laws. We will post a prominent
        notice on the Boodi platform to notify you of any significant changes
        and indicate at the top of the policy when it was most recently updated.
        We encourage you to review this policy regularly to stay informed about
        how we are protecting your information.
      </p>

      <p className={'mt-5'}>
        <strong className={'text-md'}>12. Contact Us: </strong>This policy is
        subject to changes and updates as our platform evolves and as per legal
        requirements. Your continued use of Boodi constitutes acceptance of
        these practices.
      </p>
      <p className={'mt-5 mb-[60px]'}>
        If you have any questions about this Privacy Policy, please{' '}
        <a href="mailto:davidjamesprorok@gmail.com">contact us</a>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
