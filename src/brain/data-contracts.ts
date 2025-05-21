/** ContactFormRequest */
export interface ContactFormRequest {
  /** Name */
  name: string;
  /**
   * Email
   * @format email
   */
  email: string;
  /** Subject */
  subject: string;
  /** Message */
  message: string;
}

/** EmailResponse */
export interface EmailResponse {
  /** Success */
  success: boolean;
  /** Message */
  message: string;
  /** Email Id */
  email_id?: string | null;
}

/** GenericEmailRequest */
export interface GenericEmailRequest {
  /**
   * From Email
   * @default "support@loufranktv.com"
   */
  from_email?: string;
  /**
   * From Name
   * @default "LouFrank TV Support"
   */
  from_name?: string;
  /** To */
  to: RecipientEmail[];
  /** Subject */
  subject: string;
  /** Html Content */
  html_content: string;
  /** Text Content */
  text_content?: string | null;
  /** Reply To */
  reply_to?: string | null;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** HealthResponse */
export interface HealthResponse {
  /** Status */
  status: string;
}

/** RecipientEmail */
export interface RecipientEmail {
  /**
   * Email
   * @format email
   */
  email: string;
  /** Name */
  name?: string | null;
}

/** TrialRequestRequest */
export interface TrialRequestRequest {
  /** Name */
  name: string;
  /**
   * Email
   * @format email
   */
  email: string;
  /** Phone */
  phone?: string | null;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

/** WelcomeEmailRequest */
export interface WelcomeEmailRequest {
  /** Name */
  name: string;
  /**
   * Email
   * @format email
   */
  email: string;
}

export type CheckHealthData = HealthResponse;

export type SendContactFormData = EmailResponse;

export type SendContactFormError = HTTPValidationError;

export type SendWelcomeEmailData = EmailResponse;

export type SendWelcomeEmailError = HTTPValidationError;

export type SendTrialRequestData = EmailResponse;

export type SendTrialRequestError = HTTPValidationError;

export type SendGenericEmailData = EmailResponse;

export type SendGenericEmailError = HTTPValidationError;

export type GetRobotsTxtData = any;

export type GetSitemapXmlData = any;
