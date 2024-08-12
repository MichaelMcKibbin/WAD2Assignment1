import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getActorDetails } from "../api/tmdb-api";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ActorDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const StyledButton = styled.button`
  background-color: #3681d1;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledLink = styled.a`
  background-color: #3681d1;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const ActorImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ActorName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SectionContent = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem; // Add some space between the buttons
  margin-top: 1rem; // Add some space above the buttons
`;

const ActorsDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ["actorDetails", { id }],
    getActorDetails
  );

  const getGenderText = (gender) => {
    switch (gender) {
      case 1:
        return "Female";
      case 2:
        return "Male";
      default:
        return " ~ ";
    }
  };

  const getBirthDayText = (birthday) => {
    if (birthday === null) {
      return " ? ";
    }
    return birthday;
  };
  const getDeathDayText = (deathday) => {
    if (deathday === null) {
      return " ";
    }
    return deathday;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const actor = data;

  return (
    <ActorDetailsContainer>
      <ActorImage
        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
        alt={actor.name}
      />
      <div style={{ fontFamily: "sans-serif" }}>
        <ActorName>{actor.name}</ActorName>
        <SectionTitle>Biography</SectionTitle>
        <SectionContent>{actor.biography}</SectionContent>

        <SectionTitle>D.O.B. / D.O.D.</SectionTitle>
        <SectionContent>
          {actor.birthday + " - " + getDeathDayText(actor.deathday)}
        </SectionContent>

        <SectionTitle>Gender</SectionTitle>
        <SectionContent>{getGenderText(actor.gender)}</SectionContent>

        <SectionTitle>Birthplace</SectionTitle>
        <SectionContent>{actor.place_of_birth}</SectionContent>

        <ButtonContainer>
          <Link to={`/actors/${id}/actors-movies`}>
            <StyledButton>View {actor.name}'s Movies</StyledButton>
          </Link>
          <Link to={`/actors/${id}/actors-credits`}>
            <StyledButton>View {actor.name}'s Credits </StyledButton>
          </Link>
          <StyledLink
            href={`https://www.imdb.com/name/${actor.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit {actor.name}'s IMDB page
          </StyledLink>
        </ButtonContainer>
      </div>
    </ActorDetailsContainer>
  );
};

export default ActorsDetailsPage;
