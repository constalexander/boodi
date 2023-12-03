import styles from './privacy-policy.module.scss';

/* eslint-disable-next-line */
export interface PrivacyPolicyProps {}

export function PrivacyPolicy(props: PrivacyPolicyProps) {
  return (
    <div className={'p-5'}>
      <h1>Privacy Policy</h1>
      <p className={'mt-5'}><strong>Effective Date: November 15, 2023<br />Last Revised: November 15, 2023</strong></p>
      <p className={'mt-5'}>Welcome to the Boodi platform. Your privacy and the security of your data are of paramount importance to us. This Privacy Policy outlines how we collect, use, and protect your information.</p>

      <h2 className={'text-xl my-5'}>1. Information Collection:</h2>
      <ul className={'list-disc pl-5'}>
        <li><strong>Data Provided by Users: </strong>We collect information that you provide directly when using the Boodi platform. This includes responses to prompts, questions asked to Boodi, and any feedback or communication with our team.</li>
        <li className={'mt-2'}><strong>Usage Data: </strong>We automatically collect information on how the service is accessed and used. This includes data like your device's Internet Protocol (IP) address, browser type, browser version, and the pages of our platform that you visit.</li>
      </ul>

      <h2 className={'text-xl my-5'}>Use of Information:</h2>
      <ul className={'list-disc pl-5'}>
        <li><strong>To Provide and Maintain Our Service: </strong>Your information helps us to improve and personalize your experience on the platform.</li>
        <li className={'mt-2'}><strong>Communication: </strong>We may use your information to respond to your inquiries, provide customer support, and send updates about the platform.</li>
        <li className={'mt-2'}><strong>Analytics and Improvement: </strong>To monitor the usage of our platform and gather data to enhance and develop our services. For improving our AI and understanding stress patterns.</li>
        <li className={'mt-2'}><strong>Content Creation: </strong>Anonymized responses may be used for articles, books, etc.</li>
      </ul>

      <h2 className={'text-xl my-5'}>Data Sharing and Disclosure:</h2>
      <ul className={'list-disc pl-5'}>
        <li>We do not sell your personal data to third parties.</li>
        <li className={'mt-2'}>We may share your data with trusted third parties who assist us in operating our platform, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</li>
        <li className={'mt-2'}>We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</li>
        <li className={'mt-2'}><strong>Content Usage for Publication: </strong>We may use the responses generated from your messages to create articles, books, and other forms of publications. These will be used to promote mindfulness and provide guidance to a wider audience. When using your responses, we will ensure that all personally identifiable information is removed to maintain your anonymity and confidentiality.</li>
      </ul>

      <h2 className={'text-xl my-5'}></h2>
      <ul className={'list-disc pl-5'}>
        <li><strong></strong></li>
        <li className={'mt-2'}><strong></strong></li>
      </ul>

    </div>
  );
}

export default PrivacyPolicy;
