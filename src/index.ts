import mustache from 'mustache'

export class MustacheRendererError extends Error {
  constructor (message: string) {
    super(`[Zaqar renderer error - Mustache]: ${message}`)
  }
}

async function renderFunction (text: string, data: any = {}, renderer: typeof mustache = mustache): Promise<string> {
  try {
    return renderer.render(text, data)
  } catch (error) {
    throw new MustacheRendererError(error.message)
  }
}

const rendererObj = {
  name: 'mustache',
  fn: renderFunction,
  errClass: MustacheRendererError
}

export default rendererObj
module.exports = rendererObj
