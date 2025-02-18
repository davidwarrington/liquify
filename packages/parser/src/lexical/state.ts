/* eslint-disable */

/**
 * Cache Context
 */
export enum ScanCache {
  Reset,
  SkipClose,
  PassThrough,
  TrimRight,
  GotoEnd,
  Tokenize,
  StringOpen,
  StringClose,
  HTMLToken,
  HTMLVoidTag,
  RequireParent,
  ObjectAssignment,
  IterationRangeStart,
  IterationRangeEnd,
  BracketNotation,
  BracketNotationObject,
  BracketNotationString,
  BracketNotationVariable,
  BracketNotationClose,
  UnterminatedDelimiter,
}

export const enum ScanScope {
  Reset,
  WithinHTMLAttribute,
  WithinHTMLStartTag,
  WithinHTMLVoidTag
}

/**
 * Scanner State Enumerables
 *
 * Enumerated Scan States used to distinguish the position
 * at which we are within the document and pertaining token.
 *
 * Each enum is has a code example, the `^` character in
 * the comment docs signifies the position within the token
 * the stream would presumedly be located.
 */
export const enum ScanState {
  //
  /* -------------------------------------------- */
  /* SCANNER SPECIFICS                            */
  /* -------------------------------------------- */

  /**
   * Character Sequence
   *
   * Character sequencing matcher, executing parse
   * captures by seeking out start point delimeters.
   */
  CharSeq = 1,

  /**
   * Liquid Tag
   *
   * Passes to Liquid Tag scanner, state is applied as
   * a fallback when `scan()` function  does not return match
   */
  Liquid,

  /**
   * Liquid Tag
   *
   * Passes to Liquid Tag scanner, state is applied as
   * a fallback when `scan()` function  does not return match
   */
  HTML,

  /**
   * Parse Error
   *
   * Indicates a parsing error was encounted while
   * scan was running.
   */
  ParseError,

  /**
   * Goto End of Tag
   *
   * Passes the scan to consumer which attempts to
   * close the curren token in stream.
   */
  GotoTagEnd,

  /**
   * Skips Tag
   *
   * Skips the scanning a matched tag, generally used
   * for `{% raw %}`or when ignore inline comment detected
   */
  SkipTag,
  SkipTagContents,

  /* -------------------------------------------- */
  /* LIQUID TAG TYPES                             */
  /* -------------------------------------------- */

  /**
   * `{% ^tag`
   *
   * ---
   *
   * Position is before a Liquid tag name
   */
  BeforeTagName,
  BeforeEndTagName,
  BeforeOutputTagName,

  AfterTagOpen,
  AfterEndTagOpen,

  AfterOutputTagOpen,
  AfterOutputTagName,



  BeforeOutputTagClose,
  BeforeStartTagClose,
  BeforeEndTagClose,
  BeforeSingularTagClose,


  // HTML TAG OPEN

  AfterHTMLStartTagName,
  AfterHTMLEndTagName,
  AfterHTMLVoidTagName,

  // HTML TAG CLOSE

  BeforeHTMLStartTagClose,
  BeforeHTMLEndTagClose,
  BeforeHTMLVoidTagClose,

  // HTML TAG NAME

  AfterHTMLTagName,

  TagBasicName,
  TagType,

  TagUnknown,

  TypeFilter,

  /* -------------------------------------------- */
  /* NEW                                          */
  /* -------------------------------------------- */

  EmbeddedLanguage,
  EmbeddedTagEnd,

  /* -------------------------------------------- */
  /* FRONTMATTER                                  */
  /* -------------------------------------------- */

  /**
   *  `---^`
   *
   * ---
   *
   * Position is after starting 3 dashed frontmatter delimiters
   */
  FrontmatterOpen,

  /**
   * `---^`
   *
   * ---
   *
   * Position is after ending 3 dashed frontmatter delimiter
   */
  FrontmatterClose,

  /* -------------------------------------------- */
  /* LIQUID TAG DELIMITERS                        */
  /* -------------------------------------------- */

  /**
   * `{%^`
   *
   * ---
   *
   * Position is after left side liquid tag delimiter tag
   */
  TagOpen,

  /**
   * `{{^`
   *
   * ---
   *
   * Position is after left side liquid tag delimiter tag
   */
  TagOutputOpen,

  /**
   * `{%-^`
   *
   * ---
   *
   * Position is after left side whitespace trim dash
   */
  TagOpenTrim,

  /**
   * `{{-^`
   *
   * ---
   *
   * Position is after left side whitespace trim dash
   */
  TagOutputOpenTrim,

  /**
   * `^%}` or `^}}`
   *
   * ---
   *
   * Position is before left side liquid tag delimiter tag
   */
  TagClose,

  /**
   * `-^%}` or `-^}}`
   *
   * ---
   *
   * Position is after right side whitespace trim dash
   */
  TagCloseTrim,

  /**
   * `end^name` we are at `name`
   *
   * ---
   *
   * End Tag
   */
  TagEndIdentifier,

  /* -------------------------------------------- */
  /* LIQUID OBJECT                                */
  /* -------------------------------------------- */

  /**
   * `{{^ object }}`
   *
   * ---
   *
   * Position is before dot seperator of object
   */
  Object,

  /**
   * `^obj }}` or `| filter: ^obj.prop }}`
   *
   * ---
   *
   * Position is before an object name, we use to scan
   * objects used in arguments or as values.
   */
  ObjectName,

  /**
   * `{{ object^.`
   *
   * ---
   *
   * Position is before dot seperator of an unknown object
   */
  ObjectValue,

  /**
   * `{{ object.^`
   *
   * ---
   *
   * Position is after a dot seperator within object
   */
  ObjectDotNotation,

  /**
   * `{{ object[^`
   *
   * ---
   *
   * Position is after left side bracket of object
   */
  ObjectBracketNotation,

  /**
   * `{{ object["foo"]^`
   *
   * ---
   *
   * Position is after right side bracket of object
   */
  ObjectBracketNotationEnd,

  /**
   * `{{ object.property^`
   *
   * ---
   *
   * Position is after property value but before dot seperator
   */
  ObjectProperty,

  /**
   * `{{ object["property"^`
   *
   * ---
   *
   * Position is after last quotation within bracket notation
   */
  ObjectPropertyString,

  /* -------------------------------------------- */
  /* LIQUID FILTERS                               */
  /* -------------------------------------------- */

  /**
   * `{{ tag |^`
   *
   * ---
   *
   * Position is after pipe seperator
   */
  Filter,

  /**
   * `{{ tag | filter^`
   *
   * ---
   *
   * Position is after filter name identifier
   */
  FilterIdentifier,

  /**
   * `{{ tag | filter^`
   *
   * ---
   *
   * Position is after an unknown filter name identifier
   */
  FilterIdentifierUnknown,

  /**
   * `{{ tag | filter:^`
   *
   * ---
   *
   * Position is after name identifier
   */
  FilterOperator,

  /**
   * `| filter: ^argument }}`
   *
   * ---
   *
   * Position before argument, specification is consulted and
   * we will dispatch to filter type scanner.
   */
  FilterArgumentType,

  /**
   * `| filter: argument^, }}`
   *
   * ---
   *
   * Position before a seperator when filter type is "argument"
   */
  FilterArgument,

  /**
   * `| filter: argument^, }}`
   *
   * ---
   *
   * Position before they key/property argument when filter type is "spread"
   */
  FilterSpread,

  /**
   * `| filter: property^: }}`
   *
   * ---
   *
   * Position is after parameter argument but before the parameter operator
   */
  FilterParameter,

  /**
   * `| filter: property:^ }}`
   *
   * ---
   *
   * Position is after nested property parameter operator
   */
  FilterParameterOperator,

  /**
   * `| filter: property: argument^ }}`
   *
   * ---
   *
   * Position is after property parameter argument
   */
  FilterArgumentParameter,

  /**
   * `| filter: argument,^ }}`
   *
   * ---
   *
   * Position is after seperator character
   */
  FilterSeparator,

  /* -------------------------------------------- */
  /* LIQUID CONTROL TAG                           */
  /* -------------------------------------------- */

  /**
   * `{% if^` or `{% unless^`
   *
   * ---
   *
   * Position is after the tag name identifier
   */
  Control,

  /**
   * `{% if condition^`
   *
   * ---
   *
   * Position is after the conditional argument
   */
  ControlCondition,

  /**
   * `condition ==^` or `condition and^`
   *
   * ---
   *
   * Position is after the conditional operator
   */
  ControlOperator,

  /**
   * `condition == comparison^`
   *
   * ---
   *
   * Position is after the comparison value (if any)
   */
  ControlComparison,

  /* -------------------------------------------- */
  /* LIQUID ITERATION TAG                         */
  /* -------------------------------------------- */

  /**
   * `{% for^` or `{% cycle^`
   *
   * ---
   *
   * Position is after the tag name identifier
   */
  Iteration,

  /**
   * `{% for iteree^`
   *
   * ---
   *
   * Position is after the tag name iteree identifier
   */
  IterationIteree,

  /**
   * `{% for iteree in^`
   *
   * ---
   *
   * Position is after the iteration operator
   */
  IterationOperator,

  /**
   * `{% for iteree in array^`
   *
   * ---
   *
   * Position is after the iteration array reference
   */
  IterationArray,

  /**
   * `{% for i in (^`
   *
   * ---
   *
   * Position is after the left side parenthesis of a range
   */
  IterationRangeOpen,

  /**
   * `{% for i in (1^`
   *
   * ---
   *
   * Position is after left side starting range value
   */
  IterationRangeStart,

  /**
   * `{% for i in (1..^`
   *
   * ---
   *
   * Position is after double dot seperators of a range
   */
  IterationRangeSeparators,

  /**
   * `{% for i in (1..10^`
   *
   * ---
   *
   * Position is after right side ending range value
   */
  IterationRangeEnd,

  /**
   * `{% for i in (1..10)^`
   *
   * ---
   *
   * Position is after right side parenthesis of a range
   */
  IterationRangeClose,

  /**
   * `{% for i in array ^param %}`
   *
   * ---
   *
   * Position before a parameter
   */
  IterationParameter,

  /**
   * `{% for i in array param: ^value %}`
   *
   * ---
   *
   * Position before a parameter value
   */
  IterationParameterValue,

  /* -------------------------------------------- */
  /* LIQUID VARIABLE TAGS                         */
  /* -------------------------------------------- */

  /**
   * `{% assign^ %}`
   *
   * ---
   *
   * Position is variable keyword
   */
  Variable,

  /**
   * `{% assign var^ %}`
   *
   * ---
   *
   * Position is after variable name identifier
   */
  VariableIdentifier,

  /**
   * `{% assign var =^ %}`
   *
   * ---
   *
   * Position is after variable operator
   */
  VariableOperator,

  /**
   * `{% assign var = value^ %}`
   *
   * ---
   *
   * Position is after variable assignment value
   */
  VariableAssignment,

  /* -------------------------------------------- */
  /* LIQUID IMPORT TAGS                           */
  /* -------------------------------------------- */

  /**
   * `{% include^ %}`
   *
   * ---
   *
   * Position is import keyword
   */
  Import,

  /**
   * `{% include 'dir/file'^ %}`
   *
   * ---
   *
   * Position is after import path
   */
  ImportPath,

  /**
   * `{% rende 'dir/file' with^ %}`
   *
   * ---
   *
   * Position is after keyword parameter
   */
  ImportParameterKeyword,

  /* -------------------------------------------- */
  /* LIQUID TAG ARGUMENT                          */
  /* -------------------------------------------- */

  /**
   * `{% tag ^argument` or `{% tag ^'argument'`
   *
   * ---
   *
   * Position is before a tag argument value, this will typically
   * be the 2nd value following a tag name.
   */
  Argument,

  /**
   * `{% tag argument ,^` or `{% tag 'argument' ^`
   *
   * ---
   *
   * Position is after a tag argument seperator when seperator
   * is whitespace or will be after the seperator when it's a comma value.
   */
  ArgumentSeparator,

  /* -------------------------------------------- */
  /* LIQUID TAG PARAMETER                         */
  /* -------------------------------------------- */

  /**
   * `{% tag , param^:`
   *
   * ---
   *
   * Position is after an iteration parameter name value
   */
  Parameter,

  /**
   * `{% tag ,^` or `{% tag ^`
   *
   * ---
   *
   * Position is either after a parameter seperator when seperator
   * is whitespace or will be after the seperator when its comma value.
   */
  ParameterSeparator,

  /**
   * `{% tag param:^` or `{% tag , param = ^`
   *
   * ---
   *
   * Position is after a parameter operator
   */
  ParameterOperator,

  /**
   * `param: argument^` or `, param = argument^`
   *
   * ---
   *
   * Position is after a parameter argument value
   */
  ParameterArgument,

  /* -------------------------------------------- */
  /* HTML TAGS                                    */
  /* -------------------------------------------- */

  HTMLLiquidAttribute,
  HTMLLiquidAttributeEnd,


  /**
   * `<^`
   *
   * ---
   *
   * Position is after a HTML start tag delimiter
   */
  HTMLTagOpen,

  /**
   * `<tag^`
   *
   * ---
   *
   * Position is after a HTML open tag name identifier
   */
  HTMLTagName,

  /**
   * `<tag attr^`
   *
   * ---
   *
   * Position is after a HTML attribute name
   */
  HTMLAttributeName,

  /**
   * `<tag attr=^`
   *
   * ---
   *
   * Position is after a HTML attribute delimeter
   */
  HTMLAttributeOperator,

  /**
   * `<tag attr="value"^`
   *
   * ---
   *
   * Position is after a HTML attribute value
   */
  HTMLAttributeValue,

  /**
   * `<!--^`
   *
   * ---
   *
   * Position is after a HTML open comment delimiter
   */
  HTMLCommentOpen,

  /**
   * `-->^`
   *
   * ---
   *
   * Position is after a HTML comment delimiter
   */
  HTMLCommentClose,

  /**
   * `</^`
   *
   * ---
   *
   * Position is after a HTML end tag delimiter
   */
  HTMLTagClose,

  /**
   * `</tag^`
   *
   * ---
   *
   * Position is after a HTML end tag name identifier
   */
  HTMLTagCloseName,
}
