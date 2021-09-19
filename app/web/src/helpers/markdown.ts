// Extracts YAML frontmatter from Markdown files
// Gotten from this helpful comment on a react-markdown GitHub Issue: https://github.com/remarkjs/react-markdown/issues/164#issuecomment-890497653
export function useMarkdownMetaData(text: string): Array<any> {
  return React.useMemo(() => {
    const metaData = {} as any
    /* ... */
    return [rawMetaData, metaData]
  }, [text])
}

  const metaRegExp = RegExp(/^---[\r\n](((?!---).|[\r\n])*)[\r\n]---$/m)
  // get metadata
  const rawMetaData = metaRegExp.exec(text)

  let keyValues

  if (rawMetaData!) {
    // rawMeta[1] are the stuff between "---"
    keyValues = rawMetaData[1].split('\n')

    // which returns a list of key values: ["key1: value", "key2: value"]
    keyValues.forEach((keyValue) => {
      // split each keyValue to keys and values
      const [, key, value] = keyValue.split(/(.+): (.+)/)
      metaData[key] = value.trim()
    })
  }
  return [rawMetaData, metaData]
}
