import { arrayOf, shape, string, oneOfType } from 'prop-types';
import { desktop_breakpoint } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import WebpPicture from 'components/common/WebpPicture';
import LogoImage from '../logoImage';
import SummarySection from '../summarySection';
import Roles from '../roles';
import Tools from '../tools';
import styles from './main.module.scss';

const Main = ({ project }) => {
  const isDesktop = useMediaQuery({
    minWidth: desktop_breakpoint,
  });

  const {
    name,
    logo_image_filename,
    preview_animation_filename,
    summary,
    roles,
    team,
    duration,
    tools,
    problem,
    solution,
    main_features,
    fonts,
    color_palette,
    icons,
    button_icons,
    screens,
    final_prototype,
  } = project;

  const shouldRenderLogoImage =
    logo_image_filename && logo_image_filename.length > 0;
  const shouldRenderRoles = roles && roles.length > 0;
  const shouldRenderTeam = team && team.length > 0;
  const shouldRenderDuration = duration && duration.length > 0;
  const shouldRenderTools = tools && tools.length > 0;
  const shouldRenderProblem = problem && problem.length > 0;
  const shouldRenderSolution = solution && solution.length > 0;
  const shouldRenderMainFeatures = main_features && main_features.length > 0;
  const shouldRenderFonts = fonts && fonts.length > 0;
  const shouldRenderIcons = icons && icons.length > 0;
  const shouldRenderButtonIcons = button_icons && button_icons.length > 0;
  const shouldRenderColorPalette = color_palette && color_palette.length > 0;
  const shouldRenderScreens = screens && screens.length > 0;
  const shouldRenderFinalPrototype =
    final_prototype && final_prototype.src.length > 0;

  const shouldRenderMetadata =
    shouldRenderRoles ||
    shouldRenderTeam ||
    shouldRenderDuration ||
    shouldRenderTools;
  const shouldRenderUiKitInfo =
    shouldRenderLogoImage || shouldRenderFonts || shouldRenderColorPalette;
  const shuldRenderUiKitIcons = shouldRenderIcons || shouldRenderButtonIcons;
  const shouldRenderUiKit = shouldRenderUiKitInfo || shuldRenderUiKitIcons;

  const renderTeamSection = () => {
    if (!shouldRenderTeam) return null;
    return (
      <div className={styles.metadata_item}>
        <h2 className={styles.metadata_title}>Team</h2>
        {team.map((teammate) => (
          <p className={styles.metadata_text} key={teammate}>
            {teammate}
          </p>
        ))}
      </div>
    );
  };

  const renderDurationSection = () => {
    if (!shouldRenderDuration) return null;
    return (
      <div className={styles.metadata_item}>
        <h2 className={styles.metadata_title}>Duration</h2>
        {duration.map((year) => (
          <p className={styles.metadata_text} key={year}>
            {year}
          </p>
        ))}
      </div>
    );
  };

  const renderMetadataSection = () => {
    if (!shouldRenderMetadata) return null;
    return (
      <section className={styles.metadata_container}>
        <div className={styles.metadata}>
          <Roles roles={roles} />
          {(shouldRenderTeam || shouldRenderDuration) && (
            <div>
              {renderTeamSection()}
              {renderDurationSection()}
            </div>
          )}
          <Tools tools={tools} />
        </div>
      </section>
    );
  };

  const renderProblemSection = () => {
    if (!shouldRenderProblem) return null;
    return (
      <section className={styles.problem_container}>
        <h2 className={styles.problem_title}>
          The&nbsp;<span className={styles.text_red}>Problem</span>
        </h2>
        <p className={styles.problem_text}>{problem}</p>
      </section>
    );
  };

  const renderSolutionSection = () => {
    if (!shouldRenderSolution) return null;
    return (
      <section className={styles.solution_container}>
        <h2 className={styles.solution_title}>
          The&nbsp;<span className={styles.text_green}>Solution</span>
        </h2>
        <p className={styles.solution_text}>{solution}</p>
      </section>
    );
  };

  const renderMainFeaturesSection = () => {
    if (!shouldRenderMainFeatures) return null;
    return (
      <section className={styles.main_features_container}>
        <h2 className={styles.main_features_title}>The main features are:</h2>
        <ul className={styles.main_features_lish}>
          {main_features.map((feature) => (
            <li
              className={styles.main_features_item}
              key={feature
                .split(' ')
                .map((word) => word[0])
                .join('')}
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>
    );
  };

  const renderFontsSection = () => {
    if (!shouldRenderFonts) return null;
    return (
      <>
        <h3 className={styles.typography_title}>FONTS / TYPOGRAPHY</h3>
        {fonts.map((font) => (
          <article key={font}>
            <h4 className={styles.font_name} style={{ '--font_family': font }}>
              {font}
            </h4>
            <p
              className={styles.font_demonstration}
              style={{ '--font_family': font }}
            >
              ABCDEFGHIJKLMOPQRSTUVWXZ abcdefghijklmnopqrstuvwxyz 1234567890
            </p>
          </article>
        ))}
      </>
    );
  };

  const renderColorPaletteSection = () => {
    if (!shouldRenderColorPalette) return null;
    return (
      <>
        <h3 className={styles.color_palette_title}>COLOR PALETTE</h3>
        <div className={styles.color_palette}>
          {color_palette.map((color) => (
            <div
              className={styles.color}
              key={color}
              aria-label={color}
              style={{ '--color': color }}
            />
          ))}
        </div>
      </>
    );
  };

  const renderUiKitInfoSection = () => {
    if (!shouldRenderUiKitInfo) return null;
    return (
      <div className={styles.ui_kit_info}>
        <h2 className={styles.ui_kit_title}>
          <span className={styles.text_red}>UI</span>&nbsp;Kit
        </h2>
        {shouldRenderLogoImage && (
          <WebpPicture
            containerClassName={styles.ui_kit_logo_picture}
            imgClassName={styles.ui_kit_logo_image}
            pathname="/images/portfolio/uxui/"
            filename={logo_image_filename}
            alt={name}
          />
        )}
        {renderFontsSection()}
        {renderColorPaletteSection()}
      </div>
    );
  };

  const renderIconsSection = () => {
    if (!shouldRenderIcons) return null;
    return (
      <div className={styles.icons}>
        {icons.map((filename) => (
          <WebpPicture
            containerClassName={styles.icon_picture}
            imgClassName={styles.icon_image}
            pathname="/images/portfolio/uxui/"
            filename={filename}
            alt={filename}
            key={filename}
          />
        ))}
      </div>
    );
  };

  const renderButtonIconsSection = () => {
    if (!shouldRenderButtonIcons) return null;
    return (
      <div className={styles.button_icons}>
        {button_icons.map((filename) => (
          <WebpPicture
            containerClassName={styles.button_icon_picture}
            imgClassName={styles.button_icon_image}
            pathname="/images/portfolio/uxui/"
            filename={filename}
            alt={filename}
            key={filename}
          />
        ))}
      </div>
    );
  };

  const renderUiKitIconsSection = () => {
    if (!shuldRenderUiKitIcons) return null;
    return (
      <div className={styles.ui_kit_icons}>
        {renderIconsSection()}
        {renderButtonIconsSection()}
      </div>
    );
  };

  const renderUiKitSection = () => {
    if (!shouldRenderUiKit) return null;
    return (
      <section className={styles.ui_kit_container}>
        {renderUiKitInfoSection()}
        {renderUiKitIconsSection()}
      </section>
    );
  };

  const renderScreensSection = () => {
    if (!shouldRenderScreens) return null;
    return (
      <section className={styles.screens}>
        {screens.map((screen) => {
          const { name: screenName, description, img_filename } = screen;
          return (
            <div key={screenName} className={styles.screen_container}>
              <WebpPicture
                containerClassName={styles.screen_picture}
                imgClassName={styles.screen_image}
                pathname="/images/portfolio/uxui/"
                filename={img_filename}
                alt={screenName}
              />
              <div className={styles.screen_info}>
                <h3 className={styles.screen_name}>{screenName}</h3>
                {description.map((p) => {
                  if (Array.isArray(p)) {
                    return (
                      <ul key={p}>
                        {p.map((item) => (
                          <li
                            key={item
                              .split(' ')
                              .map((word) => word[0])
                              .join('')}
                            className={styles.screen_description}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={p
                        .split(' ')
                        .map((word) => word[0])
                        .join('')}
                      className={styles.screen_description}
                    >
                      {p}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    );
  };

  const renderFinalPrototypeSection = () => {
    const { src } = final_prototype;
    if (!shouldRenderFinalPrototype) return null;
    return (
      <section className={styles.final_prototype}>
        <h2 className={styles.final_prototype_title}>
          Final&nbsp;<span className={styles.text_red}>Prototype</span>
        </h2>
        <div className={styles.prototype_container}>
          <iframe
            className={styles.prototype}
            title="Final Prototype"
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
            width="100%"
            height={isDesktop ? '800px' : ''}
            src={src}
            allowFullScreen
          />
        </div>
      </section>
    );
  };

  return (
    <main className={styles.container}>
      <LogoImage logo_image_filename={logo_image_filename} name={name} />
      <SummarySection
        summary={summary}
        name={name}
        preview_animation_filename={preview_animation_filename}
      />
      {renderMetadataSection()}
      {renderProblemSection()}
      {renderSolutionSection()}
      {renderMainFeaturesSection()}
      {renderUiKitSection()}
      {renderScreensSection()}
      {renderFinalPrototypeSection()}
    </main>
  );
};

Main.propTypes = {
  project: shape({
    name: string.isRequired,
    preview_animation_filename: string,
    logo_image_filename: string,
    summary: arrayOf(string),
    roles: arrayOf(string),
    team: arrayOf(string),
    duration: arrayOf(string),
    tools: arrayOf(string),
    problem: arrayOf(string),
    solution: arrayOf(string),
    main_features: arrayOf(string),
    fonts: arrayOf(string),
    color_palette: arrayOf(string),
    icons: arrayOf(string),
    button_icons: arrayOf(string),
    screens: arrayOf(
      shape({
        name: string.isRequired,
        description: arrayOf(oneOfType([string, arrayOf(string)])).isRequired,
        img_filename: string.isRequired,
      })
    ),
    final_prototype: shape({
      src: string,
      device_type: string,
    }),
  }).isRequired,
};

export default Main;
