# What should be a feature?

When determining whether a not a new feature should be added to the theme, we
should run the feature through the following heuristic. The term `siteland`
refers to projects built with the theme.

1. Has it existed in `siteland` long enough to uncover edge cases and
   requirements (1-3 months depending on usage)?
1. Would Carbon, IDL, or Brand Center benefit from this feature?
1. Would more than one site not mentioned above benefit from this feature?

If any of the above are false, we recommend building a solution in `siteland`
for the project that needs it most. This ensures we bring in mature, solutions
that have the largest likelihood of solving more problems than it causes.

# What constitutes a breaking change?

A breaking change for the theme is one in which, after upgrading, a site is
unable to build.

Changes to the appearance of theme components are inevitable as bug fixes and
enhancements occur. While developer intervention is avoided at all costs, we
weigh that burden against the advantages of rapid enhancements and robust
solutions.

The Carbon and IBM Design Language websites are primary consumers of the Gatsby
theme, in this way we subject ourselves to the fallout from changes requiring
intervention. When such intervention is required, release notes and Slack
announcements will indicate as such with instructions for remediation.
