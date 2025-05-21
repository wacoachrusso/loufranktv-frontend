import {
  CheckHealthData,
  ContactFormRequest,
  GenericEmailRequest,
  GetRobotsTxtData,
  GetSitemapXmlData,
  SendContactFormData,
  SendContactFormError,
  SendGenericEmailData,
  SendGenericEmailError,
  SendTrialRequestData,
  SendTrialRequestError,
  SendWelcomeEmailData,
  SendWelcomeEmailError,
  TrialRequestRequest,
  WelcomeEmailRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Brain<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Check health of application. Returns 200 when OK, 500 when not.
   *
   * @name check_health
   * @summary Check Health
   * @request GET:/_healthz
   */
  check_health = (params: RequestParams = {}) =>
    this.request<CheckHealthData, any>({
      path: `/_healthz`,
      method: "GET",
      ...params,
    });

  /**
   * @description Send a contact form submission email to the support team.
   *
   * @tags dbtn/module:emailer
   * @name send_contact_form
   * @summary Send Contact Form
   * @request POST:/routes/contact
   */
  send_contact_form = (data: ContactFormRequest, params: RequestParams = {}) =>
    this.request<SendContactFormData, SendContactFormError>({
      path: `/routes/contact`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Send a welcome email to a newly registered user.
   *
   * @tags dbtn/module:emailer
   * @name send_welcome_email
   * @summary Send Welcome Email
   * @request POST:/routes/welcome
   */
  send_welcome_email = (data: WelcomeEmailRequest, params: RequestParams = {}) =>
    this.request<SendWelcomeEmailData, SendWelcomeEmailError>({
      path: `/routes/welcome`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Send a trial request email to the support team.
   *
   * @tags dbtn/module:emailer
   * @name send_trial_request
   * @summary Send Trial Request
   * @request POST:/routes/trial-request
   */
  send_trial_request = (data: TrialRequestRequest, params: RequestParams = {}) =>
    this.request<SendTrialRequestData, SendTrialRequestError>({
      path: `/routes/trial-request`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Send a generic email with custom content.
   *
   * @tags dbtn/module:emailer
   * @name send_generic_email
   * @summary Send Generic Email
   * @request POST:/routes/send
   */
  send_generic_email = (data: GenericEmailRequest, params: RequestParams = {}) =>
    this.request<SendGenericEmailData, SendGenericEmailError>({
      path: `/routes/send`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Generate and serve robots.txt file
   *
   * @tags dbtn/module:seo
   * @name get_robots_txt
   * @summary Get Robots Txt
   * @request GET:/routes/robots.txt
   */
  get_robots_txt = (params: RequestParams = {}) =>
    this.request<GetRobotsTxtData, any>({
      path: `/routes/robots.txt`,
      method: "GET",
      ...params,
    });

  /**
   * @description Generate and serve sitemap.xml file
   *
   * @tags dbtn/module:seo
   * @name get_sitemap_xml
   * @summary Get Sitemap Xml
   * @request GET:/routes/sitemap.xml
   */
  get_sitemap_xml = (params: RequestParams = {}) =>
    this.request<GetSitemapXmlData, any>({
      path: `/routes/sitemap.xml`,
      method: "GET",
      ...params,
    });
}
