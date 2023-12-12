import lebron from "../assets/nba_players/lebron.jpg";
import kobe from "../assets/nba_players/Kobe.jpg";
import jordan from "../assets/nba_players/jordan.jpg";
import durant from "../assets/nba_players/durant.jpg";
import curry from "../assets/nba_players/steph.jpg";

interface FeaturedPlayer {
  name: string;
  description: string;
  image_url: string;
  trivia: string;
}

const featuredPlayers: {
  [key: string]: FeaturedPlayer;
} = {
  Lebron: {
    name: "Lebron Raymone James Sr.",
    description: `LeBron James, nicknamed as "King James", is widely
        regarded as one of the greatest players in the history of the sport
        and is often compared to Michael Jordan in debates over the greatest
        basketball player of all time. Known for his athleticism, versatility,
        and basketball IQ, he has won multiple NBA championships and MVP
        awards. Off the court, James is involved in various philanthropic
        efforts and is a prominent voice on social issues. James is the
        all-time leading scorer in NBA history and ranks fourth in career
        assists. He has won four NBA championships (two with the Miami Heat,
        one each with the Lakers and Cleveland Cavaliers), and has competed in
        10 NBA Finals, including eight consecutive Finals appearances from
        2011 to 2018. He has also won four Most Valuable Player (MVP) Awards,
        four Finals MVP Awards, and two Olympic gold medals, and has been
        named an All-Star 19 times, selected to the All-NBA Team 19 times
        (including 13 First Team selections) and the All-Defensive Team six
        times, and was a runner-up for the NBA Defensive Player of the Year
        Award twice in his career. As of October 2023, he is the oldest player
        in the NBA. His impact extends beyond basketball, making him a widely
        recognized and influential figure in the world of sports and beyond.
        `,
    trivia: `Something cool about LeBron James is that he is actually
        left-handed. If you've ever watched the him in action, you would have
        noticed that he shoots with his right hand. Not only can the star
        athlete train and rival all other players, but he taught himself to
        play with his right hand. Talk about dedication.`,
    image_url: lebron,
  },
  Kobe: {
    name: "Kobe Bean Bryant",
    description: `Kobe Bean Bryant (Black Mamba) was an American professional basketball player. A shooting guard, he spent his entire 20-year career with the Los Angeles Lakers in the National Basketball Association (NBA). Widely regarded as one of the greatest basketball players of all time, Bryant won five NBA championships, was an 18-time All-Star, a 15-time member of the All-NBA Team, a 12-time member of the All-Defensive Team, the 2008 NBA Most Valuable Player (MVP), and a two-time NBA Finals MVP. Bryant also led the NBA in scoring twice, and ranks fourth in league all-time regular season and postseason scoring. He was posthumously voted into the Naismith Memorial Basketball Hall of Fame in 2020 and named to the NBA 75th Anniversary Team in 2021.  Born in Philadelphia and partly raised in Italy, Bryant was recognized as the top American high-school basketball player while at Lower Merion. The son of former NBA player Joe Bryant, he declared for the 1996 NBA draft and was selected by the Charlotte Hornets with the 13th overall pick; he was then traded to the Lakers. As a rookie, Bryant earned a reputation as a high-flyer by winning the 1997 Slam Dunk Contest, and was named an All-Star by his second season. Despite a feud with teammate Shaquille O'Neal, the pair led the Lakers to three consecutive NBA championships from 2000 to 2002. Kobe Bryant is famous for being one of the best basketball players in the history of the NBA. He played guard for the Los Angeles Lakers for 20 years. He was known for his tough defense, vertical leap, and ability to score winning baskets at the end of the game. He is widely considered the best basketball player of the 2000s and perhaps one of the best of all time. also Kobe won 5 NBA championships with the LA Lakers. The first 3 championships were early on in his career (2000-2002). All-Star center Shaquille O'Neal was his teammate at the time. After Shaq was traded, it took some time for the Lakers to rebuild, but they won two more championships, one in 2009 and another in 2010. also He won two Olympic Gold medals for basketball in 2008 and 2012. he was a member of the gold medal-winning U.S. men’s basketball teams at the 2008 Beijing Olympic Games and the 2012 London Olympic Games. In 2015 Bryant wrote the poem “Dear Basketball,” and two years later it served as the basis for a short film of the same name, which he also narrated. The work won an Academy Award for best animated short film. In 2018 Bryant published the book The Mamba Mentality: How I Play, in which he described his approach to basketball; the title reflected a nickname he bestowed upon himself during his playing days, “The Black Mamba.” On January 26, 2020, Bryant and his 13-year-old daughter were among a group traveling to a girls basketball game in a helicopter when it crashed, killing all nine people aboard. He was elected into the Naismith Memorial Basketball Hall of Fame later that year.`,
    trivia: `when kobe bryant came to play for Team USA basketball he is undefeated with a record of 36-0. Combining his wins in two Olympics and the FIBA Americas Championships, Kobe had a 26-0 record. He also appeared in 10 exhibition games for Team USA and won all 10 of them. With a record of 36-0, Kobe Bryant remains in the elite company of players who have never been defeated when donning a Team USA jersey.`,
    image_url: kobe,
  },
  Jordan: {
    name: "Michael Jeffrey Jordan",
    description: `Jordan played college basketball for three seasons under coach Dean Smith with the North Carolina Tar Heels. As a freshman, he was a member of the Tar Heels' national championship team in 1982. Jordan joined the Bulls in 1984 as the third overall draft pick and quickly emerged as a league star, entertaining crowds with his prolific scoring while gaining a reputation as one of the game's best defensive players. His leaping ability, demonstrated by performing slam dunks from the free-throw line in Slam Dunk Contests, earned him the nicknames "Air Jordan" and "His Airness".  Jordan won his first NBA title with the Bulls in 1991 and followed that achievement with titles in 1992 and 1993, securing a three-peat. Jordan abruptly retired from basketball before the 1993–94 NBA season to play Minor League Baseball but returned to the Bulls in March 1995 and led them to three more championships in 1996, 1997, and 1998, as well as a then-record 72 regular season wins in the 1995–96 NBA season. He retired for the second time in January 1999 but returned for two more NBA seasons from 2001 to 2003 as a member of the Washington Wizards.
In 1984 Jordan was drafted by the Chicago Bulls. In his first season (1984–85) as a professional, he led the league in scoring and was named Rookie of the Year; after missing most of the following season with a broken foot, he returned to lead the NBA in scoring for seven consecutive seasons, averaging about 33 points per game. He was only the second player (after Wilt Chamberlain) to score 3,000 points in a single season (1986–87). Jordan was named the NBA’s Most Valuable Player (MVP) five times (1988, 1991, 1992, 1996, 1998) and was also named Defensive Player of the Year in 1988. In October 1993, after leading the Bulls to their third consecutive championship, Jordan retired briefly and pursued a career in professional baseball. He returned to basketball in March 1995. In the 1995–96 season Jordan led the Bulls to a 72–10 regular season record, the best in the history of the NBA (broken in 2015–16 by the Golden State Warriors). From 1996 to 1998 the Jordan-led Bulls again won three championships in a row, and each time Jordan was named MVP of the NBA finals. After the 1997–98 season Jordan retired again.`,
    trivia: `Michael Jordan
Michael was famous for sticking out his tongue when he made moves or dunked.
Jordan was the NBA leader in scoring for 10 seasons.
Michael Jordan starred with Bugs Bunny in the movie Space Jam.
Jordan might be just as famous for his Nike shoe the Air Jordan as for his basketball career.`,
    image_url: jordan,
  },
  Durant: {
    name: "Kevin Durant",
    description: `Kevin Durant is a highly skilled and versatile NBA player known for his scoring ability, particularly his exceptional shooting and scoring from long range. Born on September 29, 1988, Durant has played for several teams in his career, including the Seattle SuperSonics, Oklahoma City Thunder, Golden State Warriors, and the Brooklyn Nets.
    Standing at 6 feet 10 inches (208 cm), Durant is a forward with a unique blend of size, agility, and ball-handling skills. His scoring prowess extends beyond three-pointers, and he is also effective in driving to the basket. Durant's offensive repertoire, coupled with his defensive capabilities, has established him as one of the premier players in the league.
    Throughout his career, Durant has achieved numerous accolades, including NBA championships with the Golden State Warriors and NBA Finals MVP awards. He has consistently been selected for NBA All-Star games and has won scoring titles multiple times.
    Off the court, Durant is known for his philanthropy and community involvement. Durant's impact on the game and his charitable efforts contribute to his status as a respected figure in both the basketball world and beyond.`,

    trivia: `(kevin durant) 
    He was the youngest player in NBA history to win the league's scoring title.
    Kevin has won the NBA's H-O-R-S-E competition twice.
    Kevin likes to play video games and his favorite food is crab legs.
    He is best friends with fellow NBA player Michael Beasley who he grew up with.`,
    image_url: durant,
  },
  Curry: {
    name: "Stephen Curry",
    description: `Widely regarded as the greatest shooter and one of the greatest players of all time, Curry is credited with revolutionizing the sport by inspiring teams and players to take more three-point shots.[2][3][4][5] He is a four-time NBA champion, a two-time NBA Most Valuable Player (MVP), an NBA Finals MVP, an NBA All-Star Game MVP, a nine-time NBA All-Star, and a nine-time All-NBA selection, including four times on the first team`,
    image_url: curry,
    trivia: "",
  },
};

export default featuredPlayers;
