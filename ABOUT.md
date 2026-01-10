# Trading Strategy Application Overview

## What This Application Does

This is a React-based web application for Cavallini Capital. It provides:
- A secure email access form for users to request or gain access to the website.
- Email validation against an allowlist (emails.csv) to restrict access to authorized users.
- A request approval workflow: users not on the allowlist can send a pre-filled email to the administrator to request access.
- A protected area (Cavallini page) only accessible to approved users.
- Backend API (Node.js/Express) to append new emails to the allowlist (emails.csv) when users are approved.

