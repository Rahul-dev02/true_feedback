import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

/* ================================
   Props Interface
================================ */
interface VerificationEmailProps {
  username: string;
  otp: string;
}

/* ================================
   Component
================================ */
export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>

        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      {/* Email preview text (Inbox me dikhta hai) */}
      <Preview>Your verification code is {otp}</Preview>

      <Section>
        <Row>
          <Heading as="h2">Hello {username},</Heading>
        </Row>

        <Row>
          <Text>
            Thank you for registering. Please use the following verification
            code to complete your registration:
          </Text>
        </Row>

        <Row>
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "4px",
            }}
          >
            {otp}
          </Text>
        </Row>

        <Row>
          <Text>
            If you did not request this code, please ignore this email.
          </Text>
        </Row>

        {/* Optional button */}
        {/*
        <Row>
          <Button
            href={`http://localhost:3000/verify/${username}`}
            style={{ color: "#61dafb" }}
          >
            Verify here
          </Button>
        </Row>
        */}
      </Section>
    </Html>
  );
}
