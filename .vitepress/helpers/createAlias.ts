import type MarkdownIt from 'markdown-it';

export function createAlias(md: MarkdownIt, alias: string, path: string): void {
  if (typeof md !== 'object' || typeof md.renderer !== 'object') {
    throw new TypeError('O parâmetro "md" deve ser um objeto Markdown válido.');
  }
  if (typeof alias !== 'string' || !alias.length) {
    throw new TypeError('O parâmetro "alias" deve ser uma string não vazia.');
  }
  if (typeof path !== 'string' || !path.length) {
    throw new TypeError('O parâmetro "path" deve ser uma string não vazia.');
  }

  const resolveAlias = (src: string | null): string => {
    if (typeof src === 'string' && src.startsWith(alias)) {
      return src.replace(alias, path);
    }
    return src ?? '';
  };

  // Processa imagens no Markdown
  const defaultImageRule = md.renderer.rules.image;
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    token.attrSet('src', resolveAlias(token.attrGet('src')));
    if (typeof defaultImageRule === 'function') {
      return defaultImageRule(tokens, idx, options, env, self);
    }
    return self.renderToken(tokens, idx, options);
  };

  // Processa links no Markdown
  const defaultLinkRule = md.renderer.rules.link_open;
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const hrefIndex = token.attrIndex('href');
    if (hrefIndex >= 0 && token.attrs) {
      const href = token.attrs[hrefIndex][1];
      token.attrs[hrefIndex][1] = resolveAlias(href);
    }
    if (typeof defaultLinkRule === 'function') {
      return defaultLinkRule(tokens, idx, options, env, self);
    }
    return self.renderToken(tokens, idx, options);
  };
}
