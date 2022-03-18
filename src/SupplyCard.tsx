import "./styles.css";
import {
  Supply,
  Connection,
  clusterApiUrl,
  VoteAccountStatus,
  PublicKey,
} from "@solana/web3.js";
import { useEffect, useState } from "react";
import {
  abbreviatedNumber,
  lamportsToSol,
} from "./utils/index";
import React from "react";
import { Heading, VStack, Text, HStack } from "@chakra-ui/react";

function displayLamports(value: number) {
  return abbreviatedNumber(lamportsToSol(value));
}
const mintAccount = new PublicKey(
  "2Tp4hCJ24aRnsLShz9U96VtTSDHuaKL7eD7vj8Stvxhn"
);
export default function SupplyCard() {
  const [supply, setSupply] = useState<number>();
  const [voteAccounts, setVoteAccounts] = useState<VoteAccountStatus>();
  useEffect(() => {
    getSupply();
  }, []);
  async function getSupply() {
    const url = clusterApiUrl("mainnet-beta").replace("api", "explorer-api");
    const connection = new Connection(url, "finalized");
    const supply = await connection.getTokenSupply(mintAccount);
    console.log(supply)
    const voteAccounts = await connection.getVoteAccounts();
    setVoteAccounts(voteAccounts);
    setSupply(Number(supply.value.uiAmountString));
  }

  const delinquentStake = React.useMemo(() => {
    if (voteAccounts) {
      return voteAccounts.delinquent.reduce(
        (prev, current) => prev + current.activatedStake,
        0
      );
    }
  }, [voteAccounts]);

  const activeStake = React.useMemo(() => {
    if (voteAccounts && delinquentStake) {
      return (
        voteAccounts.current.reduce(
          (prev, current) => prev + current.activatedStake,
          0
        ) + delinquentStake
      );
    }
  }, [voteAccounts, delinquentStake]);

  let delinquentStakePercentage;
  if (delinquentStake && activeStake) {
    delinquentStakePercentage = ((delinquentStake / activeStake) * 100).toFixed(
      1
    );
  }

  return (
      <VStack w="100%" align="start" background="gray.900" rounded="lg" >
        <Heading size="md">HENDX Circulating Supply</Heading>
        {supply && (
          <>
            <Text fontSize="lg" textAlign="center" width="100%" margin="0 auto" fontWeight="bold">
              {abbreviatedNumber(supply)} /{" "}
              {abbreviatedNumber(supply)} HENDX
            </Text>
            <Text>
              Non circulating <em>{0} HENDX</em>
            </Text>
          </>
        )}
      </VStack>
  );
}
