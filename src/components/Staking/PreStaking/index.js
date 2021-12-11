import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Description,
  Button,
  ButtonApproved,
} from "./PreStakingelements";
import CaesarNFT from "../../../ethereum/CaesarNFT";

const stakingContractAddress = "0x3A316e28dfb781fbdc9619fE7f20b59a3a9A523B";

const Prestaking = ({ account }) => {
  const [isApproved, setisApproved] = useState(false);

  const onApproveStaking = async () => {
    await CaesarNFT.methods
      .setApprovalForAll(stakingContractAddress, true)
      .send({ from: account });
    // setisApproved(true);
    window.location.reload();
  };

  useEffect(() => {
    const calc = async () => {
      const isapproved = await CaesarNFT.methods
        .isApprovedForAll(account, stakingContractAddress)
        .call();
      setisApproved(isapproved);
    };
    if (account) calc();
  }, []);

  return (
    <div>
      <Container>
        <Title>Pre-Staking</Title>

        <Description>👉 Approve the contract to enable staking.</Description>
        <Description>👉 Once complete, stake your NFT's.</Description>

        {isApproved ? (
          <ButtonApproved>Approved</ButtonApproved>
        ) : (
          <Button onClick={onApproveStaking}> Approve Staking </Button>
        )}
      </Container>
    </div>
  );
};

export default Prestaking;
