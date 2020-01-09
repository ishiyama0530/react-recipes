import env from '../env'

const setup = () => {
  // 開発環境では ErrorBoundary でキャッチされたエラーは
  // window.onerror までスローされる。

  window.onerror = () => {
    if (env.develop) {
      // 開発時はエラー詳細を表示する
      return
    }

    // イベントハンドラ内で発生したエラーなど、ErrorBoundary でキャッチできなかった例外はここで処理する。
    window.location.href = '/error'
  }

  window.addEventListener('unhandledrejection', (e: PromiseRejectionEvent) => {
    if (env.develop) {
      // 開発時はエラー詳細を表示する
      return
    }

    // 非同期処理で発生したエラーはここで処理する。
    // APIクライアントなどのエラーフックで処理しきれなかったものが、ここに落ちてくる想定。
    window.location.href = '/error'
  })
}

export default { setup }
