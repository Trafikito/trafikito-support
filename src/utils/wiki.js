// const wiki = [
//   {
//     keywords: ['dashboard'],
//     link: 'what-is-trafikito-s-dashboard',
//   },
//   {
//     keywords: ['workspace', 'workspaces'],
//     link: 'what-is-a-workspace',
//   },
//   {
//     keywords: ['member', 'members'],
//     link: 'what-are-the-member-roles',
//   },
//   {
//     keywords: ['notification', 'notifications'],
//     article_id: 'f7277d70-7b35-489b-b378-009a690e0a3f',
//     link: 'what-are-notifications',
//   },
//   {
//     keywords: ['api call', 'api'],
//     link: 'what-is-an-api-call',
//   },
//   {
//     keywords: ['email template', 'email templates'],
//     link: 'what-is-email-templates',
//   },
//   {
//     keywords: ['variable', 'variables'],
//     link: 'what-are-variables',
//   },
//   {
//     keywords: ['data source', 'data sources'],
//     link: 'what-are-data-sources',
//   },
// ];
import {withPrefix} from 'gatsby';

const wiki = {
  'f7277d70-7b35-489b-b378-009a690e0a3f': {
    link: withPrefix('what-are-notifications.html'),
  },
};

export default function addWikiLinks({html}) {
  Object.keys(wiki).forEach((linkId) => {
    html = html.split(linkId).join(wiki[linkId].link);
  });

  return html;
}
