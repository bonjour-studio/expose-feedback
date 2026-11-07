# Privacy Policy

**Last updated:** November 7, 2026
**App:** Expose — Local HTTP/API Server
**Developer:** Bonjour, LLC
**Contact:** support@bonjour.dev

This Privacy Policy describes how Expose ("the App", "we", "us") handles
your information when you use the App on iOS or iPadOS. We have designed
the App to operate **locally on your device** and to keep your data on
your device. This document explains, in plain terms, what that means and
the few exceptions you should be aware of.

## 1. Summary

- The App runs an HTTP server **on your device, on your local network
  only**. It does not expose your device to the public internet.
- Bonjour, LLC does **not** receive or sell the contents of your local routes,
  files, folders, photos, videos, request logs, or access tokens. You control
  local-network sharing; optional iCloud route sync is described below.
- The production App includes limited analytics, crash diagnostics, and
  purchase infrastructure through Firebase, RevenueCat, and Apple platform
  services. Those systems are used for app operations and commerce, not for
  collecting the content you expose through the local server.
- Server credentials are stored in the device Keychain so saved configurations
  can be reused. They are not sent to Bonjour, LLC or included in route sync.
- The App accesses photos, files, and folders **only** when you explicitly
  pick them, and only within the scope you grant.
- You can manage permissions in iOS Settings and delete local routes, sources,
  caches, and logs in the App. Uninstalling does not necessarily remove
  Keychain entries, iCloud copies, or records held by third-party services.

## 2. Information We Do Not Receive From Local-Server Features

Through Expose's local-server features, Bonjour, LLC does not receive any of
the following:

- Your name, email address, phone number, or other contact details (we do
  not require an account).
- The contents of files, folders, photos, videos, or HTTP responses you
  expose through the App.
- Local-client IP addresses captured in request logs. Those logs can remain
  on-device for the session workflow, but they are never transmitted to us.
- Device identifiers or advertising identifiers from clients on the local
  network.
- The contents of route bodies, files, folders, photos, videos, local HTTP
  request logs, access tokens, local route URLs, and local-client IP
  addresses are not sent to Firebase Analytics, Crashlytics, or RevenueCat.
- Device GPS location. The App does not request Location Services permission.
  Original photo/video downloads can preserve embedded metadata, including
  location, and share it with the local clients you authorize. Analytics may
  derive coarse location from IP addresses as described in Section 10.

## 3. Information Stored on Your Device

The following information is stored on your device. You can share it through
local-server responses or exports. If you enable optional iCloud route sync,
route definitions, including configured response bodies and headers, are
stored in your iCloud account and synchronized between your devices. Do not
put secrets in route definitions you choose to sync. The route-sync snapshot
does not include server credentials, source file/photo contents, or request
logs. Bonjour, LLC does not operate the iCloud storage service.

- **Server configuration:** routes, route paths, header rules, and source
  references you create in the App.
- **Server credentials:** bearer tokens and Basic authentication credentials
  for saved server configurations and profiles are persisted in the device
  Keychain. Configuration JSON contains a credential reference, not the
  secret values. These credentials are not included in iCloud route sync.
- **Request logs:** each session keeps a rolling log of incoming HTTP
  requests (method, path, status code, duration, bytes, remote address,
  matched route). Tokens are removed from the log before storage.
- **Cached files:** thumbnails for the Photo Picker, temporary downloads
  pulled from File Provider / iCloud, and large response temp files used
  to keep memory low. You can clear all caches from Settings → Cache.
- **Preferences:** appearance, language, default port.

## 4. Information You Knowingly Share

- **HTTP responses on your local network.** The whole point of the App
  is to serve content to other devices on the same Wi-Fi. When you start
  the server and share a URL or QR code, anyone with the URL **and** the
  current access token (when token protection is enabled) can read the
  content of the routes you have configured. We have no visibility into
  these requests.
- **Email and feedback.** When you use "Contact Developer" to write to
  support@bonjour.dev, your email address, message contents, and the
  diagnostic details prefilled into the email body (app version, build
  commit, bundle identifier, device model, system version, and locale)
  are visible to us so that we can reply. You can edit or remove these
  details before sending. We use this information solely to respond to
  your message and do not share it with third parties.
- **App Store review.** When you tap "Rate on App Store", your review is
  governed by Apple's privacy practices, not ours.

## 5. Permissions the App Requests

The App requests the minimum iOS permissions needed for the feature you
are using:

| Permission | When asked | Why |
|---|---|---|
| Local Network | First time you start the server | Lets the App serve the local routes you enable to devices on the same network. |
| Photo Library | When you choose photos or serve selected photo assets | To let you select specific photos and videos to expose. Photo Source creation opens PHPicker directly; PhotoKit is used only to resolve assets you selected. We do not request full library access. |
| Files | First time you add a File or Folder Source | iOS shows the standard document picker. The App receives a security-scoped bookmark for the items you pick and nothing else. |

You may revoke any of these permissions in iOS Settings at any time. The
App will continue to work for the features that do not depend on the
revoked permission.

## 6. Network Behavior

- The local server listens on a TCP port you configure (default: 8080) and
  binds to the local network only. It does not open ports on your router and
  does not use a Bonjour-operated relay to serve your content.
- Separately from the local server, the App may make outbound requests needed
  for App Store purchases, RevenueCat entitlement processing, Firebase
  Analytics, Firebase Crashlytics, App Store review prompts, or links you tap
  in Settings.
- The App can advertise its running server using Bonjour/mDNS on the local
  network. Optional WebDAV and upload/write features operate on sources you
  enable. Expose does not provide a public relay, tunnel, or remote HTTPS
  termination service.
- When you contact support, your email is sent through Apple's Mail app
  using your own email account.
- When you tap "Rate on App Store", iOS opens the App Store via Apple
  APIs.

## 7. Children

Expose is a developer tool not directed at children under 13. We do not
knowingly collect personal information from anyone under 13. If you
believe a child has provided personal information to us through the App,
please contact us at support@bonjour.dev and we will delete it.

## 8. Data Retention and Deletion

- All on-device data persists until you remove it. You can:
  - Clear caches in Settings → Cache.
  - Delete request logs (per-session or all sessions) from the Logs page.
  - Delete sources, routes, and saved configuration from their respective
    pages.
  - Uninstall the App, which removes App-managed on-device configuration,
    caches, and logs.
- Deleting local data does not necessarily delete previously exported copies,
  system backups, or iCloud copies. Disabling iCloud route sync stops that
  feature; it does not itself erase data already saved to iCloud. Keychain
  entries may remain after uninstalling, so uninstalling alone is not a
  guaranteed way to remove stored credentials.
- Uninstalling the App does not delete App Store transaction records managed
  by Apple, entitlement or purchase records processed by RevenueCat, or
  analytics/crash records that were already transmitted before uninstall.

## 9. Security

- Random access tokens are generated locally with a cryptographically
  secure random source.
- Tokens are stripped from URL query strings before requests are written
  to the log file.
- File sources default to read-only access. Upload and writable WebDAV
  operations require explicit configuration; when enabled, authorized local
  clients can modify the selected source within the granted scope.
- DNS rebinding protections (Host validation, Origin checks, default-deny
  CORS) are enabled by default.
- We do not control the security of the local Wi-Fi network you connect
  to. You should not run the App on untrusted networks unless you
  understand the implications.

## 10. Third-Party Services

The production App currently uses the following external services:

- **Apple App Store / StoreKit:** processes purchases, subscriptions,
  refunds, review prompts, and App Store account-level commerce flows.
- **RevenueCat:** processes purchase history, receipts, and entitlement state
  using an SDK-generated anonymous app identifier. This enables paid access,
  purchase restoration, subscription updates, and purchase analytics. Expose
  does not supply a named Expose account or contact information to RevenueCat.
- **Firebase Analytics:** collects app-instance/device identifiers, app
  interactions such as launches and screen views, purchase-related events,
  and coarse location inferred from IP addresses for product analytics. The
  App also sends one-time app transaction metadata such as the original app
  version and purchase date. These events can be associated with the SDK
  identifiers. The App does not send route contents, file names, photo
  identifiers, local request URLs, or access tokens as analytics parameters.
- **Firebase Crashlytics:** collects crash reports, non-fatal errors, device/OS
  information, and diagnostic context to improve stability. Firebase
  components also collect SDK operational diagnostics. Expose does not set a
  named user ID in Crashlytics or send local-server content or credentials
  as diagnostic context.

These services have their own privacy practices and security controls.
Expose does not use this data for cross-app targeted advertising, does not
enable Google Signals or Google Ads sharing, and does not share this data
with advertising platforms or data brokers. We expect any service handling
App data to provide protections consistent with this policy and the limited
purposes described above.

## 11. International Users

Local-server content and request logs are stored on your device, subject to
the sharing and optional iCloud route-sync features described above. Data
handled by Apple, RevenueCat, or Firebase may be processed in the regions
where those providers operate their services.

## 12. Your Rights

We do not maintain an Expose user account or remotely store the contents you
serve through the local server. For support email you send us directly, you
may request deletion or correction by replying to our support address. For
purchase, analytics, or crash information handled by Apple, RevenueCat, or
Firebase, requests are handled through the controls and processes those
providers make available, subject to applicable law.

## 13. Changes to This Policy

We may update this Privacy Policy when laws change, when the App's
behavior changes, or when we add or remove features. The "Last updated"
date at the top of this document indicates the latest revision. If a
change introduces materially different data collection, we will surface
the change in-app before the new behavior takes effect.

## 14. Contact

Questions, requests, or complaints about this Privacy Policy can be sent
to:

- **Email:** support@bonjour.dev
- **Subject line:** Privacy
