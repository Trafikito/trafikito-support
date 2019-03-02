---
id: 79d9beda-7226-4c3a-b931-0190140a40e8
layout: post
title:  "User Roles"
categories: trafikito users
uri: blog/user-roles
featured_image: user-roles.png
tags: [blog]
---

{% include image.html file="user-roles.png" alt="User roles" %}

<p>
    When you have several members working in the same workspace you may need to set specific user roles for your
    members. Without roles, everyone on the team would be admins and can change anything. We recommend giving minimum
    required permission for each member to avoid surprises. User roles are only available with the Medium or Roarr
    plans.
</p>
<!--more-->
<p>
    There are 3 user roles available
<ol>
    <li>Owner</li>
    <li>Admin</li>
    <li>Member</li>
</ol>
</p>
<p>
    <strong>Owners</strong> have full control. They can delete the workspace, change the current owner, view, add and
    update anything.
    <br/>
    <strong>Admins</strong> can view and edit anything. However, they can’t delete the workspace or change the owner of
    the workspace.
    <br/>
    <strong>Members</strong> can view anything but they can’t edit or add anything.
</p>

<p>Here is a detailed view of all permissions:</p>

<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp t-tbl-user-roles">
    <thead>
    <tr>
        <th colspan="4" class="t-center"><h3>Workspace Management</h3></th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="mdl-data-table__cell--non-numeric">&nbsp;</td>
        <td class="mdl-data-table__cell--non-numeric t-center">Owner</td>
        <td class="mdl-data-table__cell--non-numeric t-center">Admin</td>
        <td class="mdl-data-table__cell--non-numeric t-center">Member</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Delete workspace</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Update name, notifications and email</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Update billing profile</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Update current plan</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Select and view workspace</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
    </tr>
    </tbody>
</table>

<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp t-tbl-user-roles">
    <thead>
    <tr>
        <th colspan="4" class="t-center"><h3>Members Management</h3></th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="mdl-data-table__cell--non-numeric">&nbsp;</td>
        <td class="mdl-data-table__cell--non-numeric t-center">Owner</td>
        <td class="mdl-data-table__cell--non-numeric t-center">Admin</td>
        <td class="mdl-data-table__cell--non-numeric t-center">Member</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Add member</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Change member role</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Turn member off</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    </tbody>
</table>

<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp t-tbl-user-roles">
    <thead>
    <tr>
        <th colspan="4" class="t-center"><h3>Servers Management</h3></th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="mdl-data-table__cell--non-numeric">&nbsp;</td>
        <td class="mdl-data-table__cell--non-numeric t-center">Owner</td>
        <td class="mdl-data-table__cell--non-numeric t-center">Admin</td>
        <td class="mdl-data-table__cell--non-numeric t-center">Member</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Add, remove and update server
        </td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">View installation command</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Add, remove and update data sources</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Add, remove and update notifications</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">Add, remove and update integrations</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center">no</td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">View data sources</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">View notifications</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">View integrations</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
    </tr>
    <tr>
        <td class="mdl-data-table__cell--non-numeric t-ur-title">View logs</td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
        <td class="mdl-data-table__cell--non-numeric t-center"><i class="material-icons">check</i></td>
    </tr>
    </tbody>
</table>