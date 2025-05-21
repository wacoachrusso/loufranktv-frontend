import {
  CheckHealthData,
  ContactFormRequest,
  GenericEmailRequest,
  GetRobotsTxtData,
  GetSitemapXmlData,
  SendContactFormData,
  SendGenericEmailData,
  SendTrialRequestData,
  SendWelcomeEmailData,
  TrialRequestRequest,
  WelcomeEmailRequest,
} from "./data-contracts";

export namespace Brain {
  /**
   * @description Check health of application. Returns 200 when OK, 500 when not.
   * @name check_health
   * @summary Check Health
   * @request GET:/_healthz
   */
  export namespace check_health {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckHealthData;
  }

  /**
   * @description Send a contact form submission email to the support team.
   * @tags dbtn/module:emailer
   * @name send_contact_form
   * @summary Send Contact Form
   * @request POST:/routes/contact
   */
  export namespace send_contact_form {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ContactFormRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SendContactFormData;
  }

  /**
   * @description Send a welcome email to a newly registered user.
   * @tags dbtn/module:emailer
   * @name send_welcome_email
   * @summary Send Welcome Email
   * @request POST:/routes/welcome
   */
  export namespace send_welcome_email {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WelcomeEmailRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SendWelcomeEmailData;
  }

  /**
   * @description Send a trial request email to the support team.
   * @tags dbtn/module:emailer
   * @name send_trial_request
   * @summary Send Trial Request
   * @request POST:/routes/trial-request
   */
  export namespace send_trial_request {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TrialRequestRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SendTrialRequestData;
  }

  /**
   * @description Send a generic email with custom content.
   * @tags dbtn/module:emailer
   * @name send_generic_email
   * @summary Send Generic Email
   * @request POST:/routes/send
   */
  export namespace send_generic_email {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GenericEmailRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SendGenericEmailData;
  }

  /**
   * @description Generate and serve robots.txt file
   * @tags dbtn/module:seo
   * @name get_robots_txt
   * @summary Get Robots Txt
   * @request GET:/routes/robots.txt
   */
  export namespace get_robots_txt {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetRobotsTxtData;
  }

  /**
   * @description Generate and serve sitemap.xml file
   * @tags dbtn/module:seo
   * @name get_sitemap_xml
   * @summary Get Sitemap Xml
   * @request GET:/routes/sitemap.xml
   */
  export namespace get_sitemap_xml {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetSitemapXmlData;
  }
}
