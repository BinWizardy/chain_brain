from backend.services.openAI.graph_prompt import GraphPromptBase as Prompt


EXAMPLES = [
Prompt(
q="What were the results for Proposal 86?",
o="""query{
  proposals(where: {id: "86"}) {
    abstainWeightedVotes
    againstWeightedVotes
    forWeightedVotes
  }
}"""),
Prompt(
q="How many votes did proposal 86 have?",
o="""query{
  proposals(where: {id: "86"}) {
    totalWeightedVotes
  }
}"""),

Prompt(
q="Summarize Proposal with ID = 86?",
o="""query {
  proposal(id: "86") {
    description
    state
    quorumVotes
    tokenHoldersAtStart
    delegatesAtStart
    againstDelegateVotes
    forDelegateVotes
    abstainDelegateVotes
    totalDelegateVotes
    againstWeightedVotes
    forWeightedVotes
    abstainWeightedVotes
    totalWeightedVotes
    governanceFramework {
      id
      name
      type
      version
    }
  }
}
"""),
Prompt(
q="Who are the top delegates by voting power?",
o="""query{
  votes(orderBy: voter__tokenHoldersRepresentedAmount, orderDirection: desc) {
    voter {
      tokenHoldersRepresentedAmount
      id
    }}}
    """),
Prompt(
q="What was the voting timeline for Against, For, and Abstain votes for proposal 86 to add MATIC to the protocol?",
o="""{
  voteDailySnapshots(
    where: {proposal_: {id: "86"}
    }
    orderBy: timestamp
    orderDirection: asc
  ) {
    abstainWeightedVotes
    againstWeightedVotes
    forWeightedVotes
    timestamp
  } 
}
""")
]
