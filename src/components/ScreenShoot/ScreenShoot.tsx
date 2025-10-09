import "./style.css";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocalFormatHook } from "../../common/hooks/localFormatHook";
import { useProjectConstant } from "../../constant/projectListConstant";

// Buyer
import FAQ from "../../assets/Buyer Persona/FAQ.webp";
import Avis from "../../assets/Buyer Persona/Avis.webp";
import About from "../../assets/Buyer Persona/About.webp";
import Welcome from "../../assets/Buyer Persona/Welcome.webp";
import Setting from "../../assets/Buyer Persona/Setting.webp";
import Loading from "../../assets/Buyer Persona/Loading.webp";
import Generator from "../../assets/Buyer Persona/Generator.webp";
import GeneratedFile from "../../assets/Buyer Persona/generated-file.png";
import SuccessGenerate from "../../assets/Buyer Persona/SuccessGenerate.webp";
import SuccessDownload from "../../assets/Buyer Persona/SuccessDownload.webp";
// Gestion de fond
import expense_tracking_home from "../../assets/GestionDeFond/home.webp";
import expense_tracking_expenses from "../../assets/GestionDeFond/expenses.webp";
import expense_tracking_finance_home from "../../assets/GestionDeFond/finance-home.webp";
import expense_tracking_new_buy_plan from "../../assets/GestionDeFond/new-buy-plan.webp";
import expense_tracking_delete_expense from "../../assets/GestionDeFond/delete-expense.webp";
import expense_tracking_select_plan_detail from "../../assets/GestionDeFond/plan-detail.webp";
import expense_tracking_select_plan_type from "../../assets/GestionDeFond/select-plan-type.webp";
import expense_tracking_new_selling_goal from "../../assets/GestionDeFond/new-selling-goal.webp";
import expense_tracking_expense_details_2 from "../../assets/GestionDeFond/expense-details-2.webp";
import expense_tracking_delete_finance_goal from "../../assets/GestionDeFond/delete-finance-goal.webp";
import expense_tracking_finance_sold_detail from "../../assets/GestionDeFond/finance-sold-detail.webp";
import expense_tracking_creation_new_expense from "../../assets/GestionDeFond/creation-new-expense.webp";
import expense_tracking_expense_chart_details from "../../assets/GestionDeFond/expense-chart-details.webp";
import expense_tracking_creation_expense_1 from "../../assets/GestionDeFond/creation-new-expense-amount.webp";
import expense_tracking_expense_category_filters from "../../assets/GestionDeFond/expense-category-filters.webp";
// Vatsy
import vatsy_page_1 from "../../assets/Vatsy/page_1.webp";
import vatsy_addition from "../../assets/Vatsy/addition.webp";
import vatsy_liste_soupe from "../../assets/Vatsy/liste_soupe.webp";
import vatsy_date_filter from "../../assets/Vatsy/date_filter.webp";
import vatsy_see_invoice from "../../assets/Vatsy/see_invoice.webp";
import vatsy_table_filter from "../../assets/Vatsy/table_filter.webp";
import vatsy_ask_password from "../../assets/Vatsy/ask_password.webp";
import vatsy_bol_renverser from "../../assets/Vatsy/bol_renverser.webp";
import vatsy_purchase_filter from "../../assets/Vatsy/purchase_filter.webp";
import vatsy_selection_quantity from "../../assets/Vatsy/selection_quantity.webp";
import vatsy_category_de_depense from "../../assets/Vatsy/category_de_depense.webp";
import vatsy_historique_de_vente from "../../assets/Vatsy/historique_de_vente.webp";
import vatsy_historique_de_depense from "../../assets/Vatsy/historique_de_depense.webp";
// Portfolio
import portfolio_home from "../../assets/Portfolio Design V2/home.webp";
import portfolio_vatsy from "../../assets/Portfolio Design V2/vatsy.webp";
import portfolio_buyer from "../../assets/Portfolio Design V2/buyer.webp";
import portfolio_projects from "../../assets/Portfolio Design V2/projects.webp";
import portfolio_vatsy_screen from "../../assets/Portfolio Design V2/vatsy-screen.webp";
import portfolio_buyer_screen from "../../assets/Portfolio Design V2/buyer-screen.webp";

const ScreenShoot: FC = () => {
    const { Projects } = useProjectConstant();
    const { formatText } = useLocalFormatHook();

    const params = useParams();
    const search = new URLSearchParams(params);
    const projectName = search.get("name") || null;

    const currentProject = Projects.find(
        (el) => el.name.toLowerCase() === projectName?.toLowerCase(),
    );
    const logo = currentProject ? currentProject?.logo : undefined;

    console.log("projectrName = ", projectName);

    return  (
        <div className="containerProject">
            <h3 className="containerProjectTitle">
                <Link to="/projects" style={{ textDecoration: "none", fontSize: 18 }}>
                    {formatText("projects").toUpperCase()}
                </Link>
                {projectName && (
                <Link to={{pathname: currentProject?.link, state: currentProject}}>
                    <span
                        style={{
                            fontWeight: "normal",
                            position: "relative",
                            letterSpacing: "2px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "end",
                        }}
                    >
                        <span>/</span>
                        {logo && (
                            <img
                                src={logo}
                                loading="lazy"
                                alt="project"
                                style={{
                                    marginLeft: "3px",
                                    left: 8,
                                    top: -3,
                                    position: "absolute",
                                    width: 38,
                                }}
                            />
                        )}
                        <span
                            className="projectTitle"
                            style={{ marginLeft: logo ? "44px" : "10px" }}
                        >
                            {` ${projectName}`}
                        </span>
                    </span>
                </Link>
                )}
            </h3>
            <div className="projectDetail-screenshoot">
                <div className="screenShootWeb buyer-persona-grid" style={{display: projectName === "buyer" ? 'grid' : 'none'}}>
                    <img src={FAQ} alt="FAQ Buyer persona" loading="lazy" width={200} className="animate-up" />
                    <img src={Avis} alt="Avis Buyer persona" loading="lazy"  width={200} className="animate-up"/>
                    <img src={About} alt="About Buyer persona" loading="lazy"  width={200} className="animate-up"/>
                    <img src={Welcome} alt="Welcome Buyer persona" loading="lazy"  width={200} className="animate-up"/>
                    <img src={Setting} alt="Setting Buyer persona" loading="lazy"  width={200} className="animate-up"/>
                    <img src={Loading} alt="Loading Buyer persona" loading="lazy" width={200} className="animate-up" />
                    <img src={Generator} alt="Generator Buyer persona" loading="lazy" width={200} className="animate-up" />
                    <img src={GeneratedFile} alt="GeneratedFile Buyer persona" loading="lazy"  width={200} className="animate-up"/>
                    <img src={SuccessGenerate} alt="SuccessGenerate Buyer persona" loading="lazy" width={200} className="animate-up" />
                    <img src={SuccessDownload} alt="SuccessDownload Buyer persona" loading="lazy"  width={200} className="animate-up"/>
                </div>
                <div className="screenShootWeb vatsy-grid" style={{display: projectName === "gestion-fond" ? 'grid' : 'none'}}>
                    <img src={expense_tracking_home} alt="home gestion de fond" width={300}  className="animate-up"/>
                    <img src={expense_tracking_expenses} alt="expenses gestion de fond" width={300} className="animate-up"/>
                    <img src={expense_tracking_finance_home} alt="finance home gestion de fond"  width={300} className="animate-up"/>
                    <img src={expense_tracking_new_buy_plan} alt="buy plan gestion de fond"  width={300} className="animate-up"/>
                    <img src={expense_tracking_delete_expense} alt="delete expense gestion de fond"  width={300} className="animate-up"/>
                    <img src={expense_tracking_select_plan_detail} alt="plan detail gestion de fond"  width={300} className="animate-up"/>
                    <img src={expense_tracking_select_plan_type} alt="plan type gestion de fond"  width={300} className="animate-up"/>
                    <img src={expense_tracking_new_selling_goal} alt="selling goal gestion de fond"  width={300} className="animate-up"/>
                    <img src={expense_tracking_delete_finance_goal} alt="delete finance goal gestion de fond"  width={300} className="animate-up"/>
                    <img src={expense_tracking_finance_sold_detail} alt="finance sold detail - gestion de fond"  width={300} className="animate-up"/>
                    <img src={expense_tracking_creation_new_expense} alt="new expense - gestion de fond"  width={300} className="animate-up"/>
                    <img src={expense_tracking_expense_chart_details} alt="chart details - gestion de fond"  width={300} className="animate-up"/>
                    <img src={expense_tracking_creation_expense_1} alt="creation expense - gestion de fond" width={300} className="animate-up" />
                    <img src={expense_tracking_expense_category_filters} alt="category filters - gestion de fond"  width={300} className="animate-up"/>
                    <img src={expense_tracking_expense_details_2} alt="detail - gestion de fond"  width={300} className="animate-up"/>   
                </div>
                <div className="screenShootWeb vatsy-grid" style={{display: projectName === "vatsy" ? 'grid' : 'none'}}>
                    <img src={vatsy_page_1} alt="page 1 - vatsy" width={300} className="animate-up"/>
                    <img src={vatsy_addition} alt="addition - vatsy" width={300}  className="animate-up"/>
                    <img src={vatsy_liste_soupe} alt="liste soupe - vatsy" width={300} className="animate-up"/>
                    <img src={vatsy_date_filter} alt="date filter - vatsy" width={300} className="animate-up"/>
                    <img src={vatsy_see_invoice} alt="invoice - vatsy" width={300} className="animate-up"/>
                    <img src={vatsy_table_filter} alt="table filter - vatsy" width={300} className="animate-up"/>
                    <img src={vatsy_ask_password} alt="password - vatsy" width={300} className="animate-up"/>
                    <img src={vatsy_bol_renverser} alt="bol - vatsy" width={300} className="animate-up"/>
                    <img src={vatsy_purchase_filter} alt="purchase - vatsy" width={300} className="animate-up"/>
                    <img src={vatsy_selection_quantity} alt="selection quantity - vatsy" width={300} className="animate-up"/>
                    <img src={vatsy_category_de_depense} alt="category depense - vatsy" width={300} className="animate-up"/>
                    <img src={vatsy_historique_de_vente} alt="historique vente - vatsy" width={300} className="animate-up"/>
                    <img src={vatsy_historique_de_depense} alt="historique depense - vatsy"width={300}  className="animate-up"/>
                </div>
                <div className="screenShootWeb portfolio-grid" style={{display: projectName === "portfolio" ? 'grid' : 'none'}}>
                    <img src={portfolio_home} alt="home - portfolio" width={400} className=" animate-up"/>
                    <img src={portfolio_vatsy} alt="vatsy - portfolio" width={400} className=" animate-up"/>
                    <img src={portfolio_buyer} alt="buyer - portfolio" width={400} className=" animate-up"/>
                    <img src={portfolio_projects} alt="projects - portfolio" width={400} className=" animate-up"/>
                    <img src={portfolio_vatsy_screen} alt="vatsy screen - portfolio" width={400} className=" animate-up"/>
                    <img src={portfolio_buyer_screen} alt="buyer screen - portfolio" width={400} className=" animate-up"/>
                </div>
            </div>
        </div>    
    )
}

export default ScreenShoot;