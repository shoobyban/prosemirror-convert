# Prosemirror Markdown to JSON converter

Converts markdown values stored in MySQL database to Prosemirror internal JSON format and updating them into `json` field.

## Install

```sh
$ yarn
```

Copy `.env.example` to `.env` and modify credentials, database host.

Adapt script to your table structure (we currentyl use articles, in articles id, body and json field).

```sh
$ yarn convert
```

No output means good things. Check your tables afterwards. Make sure json field has much bigger capacity than body.
