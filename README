# Gemini CLI

Gemini APIを使用したインタラクティブなコマンドラインチャットツールです。Claude Codeのようにチャット形式でGeminiと対話できます。

## 特徴

- 🤖 Gemini 2.5 Flash Preview APIを使用
- 💬 インタラクティブなチャット形式
- 🔑 セキュアなAPIキー管理（コマンドライン引数）
- 📝 TypeScriptで実装
- 🚀 高速で軽量

## インストール

```bash
# 依存関係のインストール
npm install

# ビルド
npm run build
```

## 使用方法

### 基本的な使い方

```bash
# APIキーを指定して実行
npm start -- -k YOUR_GEMINI_API_KEY

# または開発モード
npm run dev -- -k YOUR_GEMINI_API_KEY
```

### Gemini APIキーの取得

1. [Google AI Studio](https://aistudio.google.com/app/apikey)にアクセス
2. Googleアカウントでログイン
3. 「Create API Key」をクリック
4. 生成されたAPIキーをコピー

### チャットの操作

- メッセージを入力してEnterキーで送信
- `exit` または `quit` で終了
- 空行はスキップされます

### 使用例

```
> こんにちは

考え中...

Gemini: こんにちは！何かお手伝いできることはありますか？

> TypeScriptでHello Worldを書いて

考え中...

Gemini: TypeScriptでのHello Worldプログラムは以下のようになります：

```typescript
console.log("Hello, World!");
```

> exit
チャットを終了します。
さようなら！
```

## 開発

### スクリプト

- `npm run build` - TypeScriptをコンパイル
- `npm start` - ビルド済みファイルを実行
- `npm run dev` - 開発モード（ファイル監視付き）

### プロジェクト構造

```
src/
├── index.ts     # エントリーポイント
├── cli.ts       # インタラクティブCLI実装
└── gemini.ts    # Gemini API クライアント
```

## トラブルシューティング

### APIキーエラー
- APIキーが正しく設定されているか確認
- APIキーに適切な権限があるか確認

### モデルエラー
- 現在は `gemini-2.5-flash-preview-05-20` を使用
- 他のモデルを使用したい場合は `src/gemini.ts` を編集

## ライセンス

ISC
